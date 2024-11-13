// src/components/admin/ProductManagement.jsx
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Plus, Edit, Trash2, ImagePlus } from "lucide-react";
import axios from "axios";
import { useForm } from "react-hook-form";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const { toast } = useToast();

  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      category: "solar_panel",
      specifications: [],
      images: [],
      price: "",
      status: "active",
    },
  });

  const categories = [
    { value: "solar_panel", label: "Solar Panel" },
    { value: "inverter", label: "Inverter" },
    { value: "battery", label: "Battery" },
    { value: "pump", label: "Solar Pump" },
    { value: "accessory", label: "Accessory" },
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/admin/products`,
        {
          headers: { token },
        }
      );
      setProducts(response.data.products);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch products",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle file upload
  const handleImageUpload = async (files) => {
    try {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }

      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/admin/upload`,
        formData,
        {
          headers: {
            token,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response.data.imageUrls;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload images",
        variant: "destructive",
      });
      return [];
    }
  };

  const onSubmit = async (data) => {
    try {
      // Handle image upload if there are new images
      if (data.images?.length > 0) {
        const imageUrls = await handleImageUpload(data.images);
        data.images = imageUrls;
      }

      const token = localStorage.getItem("token");
      const url = `${import.meta.env.VITE_API_URL}/api/admin/products${
        editingProduct ? `/${editingProduct._id}` : ""
      }`;
      const method = editingProduct ? "put" : "post";

      await axios[method](url, data, {
        headers: { token },
      });

      toast({
        title: "Success",
        description: `Product ${
          editingProduct ? "updated" : "created"
        } successfully`,
      });

      setIsDialogOpen(false);
      form.reset();
      setEditingProduct(null);
      fetchProducts();
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to ${
          editingProduct ? "update" : "create"
        } product`,
        variant: "destructive",
      });
    }
  };

  const handleSpecificationAdd = () => {
    const specs = form.getValues("specifications") || [];
    form.setValue("specifications", [...specs, { key: "", value: "" }]);
  };

  const handleSpecificationRemove = (index) => {
    const specs = form.getValues("specifications") || [];
    form.setValue(
      "specifications",
      specs.filter((_, i) => i !== index)
    );
  };

  // ... Rest of the component with form and table UI
  return (
    <div className="space-y-6">
      {/* Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add New Product
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              {editingProduct ? "Edit Product" : "Create New Product"}
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Basic Information */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter product name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Product description" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem
                              key={category.value}
                              value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price (₹)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          placeholder="Enter price"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Specifications */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <FormLabel>Specifications</FormLabel>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleSpecificationAdd}>
                    Add Specification
                  </Button>
                </div>
                {form.watch("specifications")?.map((spec, index) => (
                  <div key={index} className="grid grid-cols-2 gap-2 mb-2">
                    <Input
                      placeholder="Key"
                      value={spec.key}
                      onChange={(e) => {
                        const specs = [...form.getValues("specifications")];
                        specs[index].key = e.target.value;
                        form.setValue("specifications", specs);
                      }}
                    />
                    <div className="flex gap-2">
                      <Input
                        placeholder="Value"
                        value={spec.value}
                        onChange={(e) => {
                          const specs = [...form.getValues("specifications")];
                          specs[index].value = e.target.value;
                          form.setValue("specifications", specs);
                        }}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => handleSpecificationRemove(index)}>
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Image Upload */}
              <FormField
                control={form.control}
                name="images"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Images</FormLabel>
                    <FormControl>
                      <div className="border-2 border-dashed rounded-lg p-4">
                        <Input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={(e) => field.onChange(e.target.files)}
                          className="hidden"
                          id="image-upload"
                        />
                        <label
                          htmlFor="image-upload"
                          className="flex flex-col items-center justify-center cursor-pointer">
                          <ImagePlus className="w-8 h-8 text-gray-400" />
                          <span className="mt-2 text-sm text-gray-500">
                            Click to upload images
                          </span>
                        </label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingProduct ? "Update Product" : "Create Product"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Products Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-10">
                Loading...
              </TableCell>
            </TableRow>
          ) : products.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-10">
                No products found
              </TableCell>
            </TableRow>
          ) : (
            products.map((product) => (
              <TableRow key={product._id}>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <span className="font-medium">{product.name}</span>
                  </div>
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>₹{product.price}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}>
                    {product.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        form.reset(product);
                        setEditingProduct(product);
                        setIsDialogOpen(true);
                      }}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(product._id)}>
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductManagement;

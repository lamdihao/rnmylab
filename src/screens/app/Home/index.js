/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { styles } from '../../app/Home/styles'
import { FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity, View, TextInput, Image } from "react-native"; // Add TextInput and Image imports
import Header from "../../../components/Header";
import { categories } from "../../../components/data/categories";
import CategoryBox from "../../../components/CategoryBox";
import ProductHomeItem from "../../../components/ProductHomeItem";
import { products as initialProducts } from "../../../components/data/products";

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState();
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({ title: "", category: "", price: "", image: "" });

  const handleAddNewProduct = () => {
    setIsAddingProduct(true);
  };

  const handleSaveProduct = () => {
    if (newProduct.id) {
      // Edit existing product
      const updatedProducts = filteredProducts.map((product) =>
        product.id === newProduct.id ? { ...newProduct } : product
      );
      setFilteredProducts(updatedProducts);
    } else {
      // Add new product
      const newProductId = generateUniqueId();
      const updatedProducts = [...filteredProducts, { id: newProductId, ...newProduct }];
      setFilteredProducts(updatedProducts);
    }

    setIsAddingProduct(false);
    setNewProduct({ title: "", category: "", price: "", image: "" }); 
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = filteredProducts.filter((product) => product.id !== productId);
    setFilteredProducts(updatedProducts);
  };

  const handleEditProduct = (productId) => {
    const productToEdit = filteredProducts.find((product) => product.id === productId);
    setIsAddingProduct(true);
    setNewProduct(productToEdit);
  };

  const generateUniqueId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  const filterProducts = (category, keyword) => {
    return initialProducts.filter((product) =>
      (!category || product?.category === category) &&
      (!keyword || product?.title?.toLowerCase().includes(keyword?.toLowerCase()))
    );
  };

  useEffect(() => {
    const updatedProducts = filterProducts(selectedCategory, keyword);
    setFilteredProducts(updatedProducts);
  }, [selectedCategory, keyword]);

  const renderCategoryItem = ({ item }) => {
    return <CategoryBox title={item?.title} image={item?.image}></CategoryBox>;
  };

  const renderProductItem = ({ item }) => {
    return (
      <View style={styles.productItem}>
        <ProductHomeItem {...item} />
        <View style={styles.productButtons}>
          <TouchableOpacity onPress={() => handleEditProduct(item.id)}>
            <Text style={styles.editButton}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDeleteProduct(item.id)}>
            <Text style={styles.deleteButton}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Header
          showSearch
          onSearch={setKeyword}
          keyword={keyword}
          title="Find All You Need"
        />

        <FlatList
          showsHorizontalScrollIndicator={false}
          style={styles.list}
          horizontal
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => String(item.id)}
        />

        {isAddingProduct ? (
          <View style={{marginLeft:24, marginRight:24}}>
            <Text style={{color:"#0000FF",fontWeight:'bold',fontSize:24}}>{newProduct.id ? "Edit" : "Add"} Product</Text>
            <TextInput

              placeholder="Title:"
              value={newProduct.title}
              onChangeText={(text) => setNewProduct({ ...newProduct, title: text })}
            />
            <TextInput
              placeholder="Category:"
              value={newProduct.category}
              onChangeText={(text) => setNewProduct({ ...newProduct, category: text })}
            />
            <TextInput
              placeholder="Price:  "
              value={newProduct.price}
              onChangeText={(text) => setNewProduct({ ...newProduct, price: text })}
            />
            <TextInput
              placeholder="Image URL:"
              value={newProduct.image}
              onChangeText={(text) => setNewProduct({ ...newProduct, image: text })}
            />
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={handleSaveProduct}>
              <Text style={{backgroundColor: "#4CAF50",paddingVertical: 12, borderRadius: 4,alignItems: "center", width:165, paddingLeft:70}}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsAddingProduct(false)}>
              <Text style={{backgroundColor: "#f44336",paddingVertical: 12, borderRadius: 4,alignItems: "center", width:163, paddingLeft:60, marginLeft: 16}}>Cancel</Text>
            </TouchableOpacity>
            </View>
          </View>
        ) : (
          <TouchableOpacity style={styles.addButton} onPress={handleAddNewProduct}>
            <Text style={styles.addButtonText}>Add New Product</Text>
          </TouchableOpacity>
        )}

        <FlatList
          style={styles.productsList}
          numColumns={2}
          data={filteredProducts}
          renderItem={renderProductItem}
          keyExtractor={(item) => String(item.id)}
          ListFooterComponent={<View style={{ height: 200 }} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Home);

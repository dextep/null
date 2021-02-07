<template>
<div class="wrapper">
  <h1>ADMIN PAGE</h1>
<br/>
<br/>
<br/>

  <h1>PRODUCTS</h1>
  <form @submit="onSubmit">
    <input
      type="file"
      accept="image/png, image/jpeg"
      multiple
      @change="onFileChange"
    />
    <input type="text" name="title" placeholder="title" value="a" />
    <input type="text" name="price" placeholder="price" value="a" />
    <button>Submit</button>
  </form>
  <button @click="getProducts">List products</button>

  <ul>
    <template v-for="(product, index) in products" :key="index">
      <li>title: {{ product.title }}</li>
      <li>price: {{ product.price }}</li>
      <li>
        <div style="display: flex;">
          <template v-for="(imgs, index) in product.imgs" :key="index">
            <img :src="imgs.url" width="100" height="100" :alt="imgs.name" />
          </template>
        </div>
      </li>
    </template>
  </ul>
<br/>
<br/>
<br/>
  <h1>HOME SLIDER</h1>
  <form @submit="onSubmitSlider">
    <input
      type="file"
      accept="image/png, image/jpeg"
      multiple
      @change="onFileChangeSlider"
    />
    <input type="text" name="title" placeholder="title" value="a" />
    <input type="text" name="description" placeholder="description" value="a" />
    <button>Submit</button>
  </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

export default {
  data() {
    return {
      fileSlider: {},
      files: [],
      imgs: [],
      products: {},
      firestore: firebase.firestore(),
    };
  },
  methods: {
    onFileChangeSlider(e) {
      this.fileSlider = e.target.files;
    },
    async onSubmitSlider(e) {
      e.preventDefault();
      const title = e.target.title.value;
      const description = e.target.description.value;
      try {
        if (!title || !description) {
          throw "Requied fields";
        }
        const productRef = this.firestore.collection("main_slider").doc();
        const storageRef = firebase.storage().ref();

        console.log(this.fileSlider[0])
          const asdx = storageRef.child(
            "main_slider/" + productRef.id + "/" + this.fileSlider[0].name
          );
          await asdx.put(this.fileSlider[0]);
         const img = {
            name: this.fileSlider[0].name,
            url: await asdx.getDownloadURL(),
          };

        await productRef
          .set({
            title: title,
            description: description,
            img: img,
          })
          .then(function() {
            console.log("Document successfully written!");
          })
          .catch(function(e) {
            throw e;
          });
      } catch (error) {
        console.error("Error writing document: ", error);
      }
    },
    onFileChange(e) {
      this.files = e.target.files;
    },
    async onSubmit(e) {
      e.preventDefault();
      const title = e.target.title.value;
      const price = e.target.price.value;
      try {
        if (!title || !price || !this.files) {
          throw "Requied files";
        }
        const productRef = this.firestore.collection("products").doc();
        const storageRef = firebase.storage().ref();

        const imgList = [];

        for (const file of this.files) {
          const asdx = storageRef.child(
            "products/" + productRef.id + "/" + file.name
          );
          await asdx.put(file);
          imgList.push({
            name: file.name,
            url: await asdx.getDownloadURL(),
          });
        }

        await productRef
          .set({
            title: title,
            price: price,
            imgs: imgList,
          })
          .then(function() {
            console.log("Document successfully written!");
          })
          .catch(function(e) {
            throw e;
          });
      } catch (error) {
        console.error("Error writing document: ", error);
      }
    },
    async getProducts() {
      const productsRef = this.firestore.collection("products");
      const snapshot = await productsRef.get();

      if (snapshot.empty) {
        console.log("No matching products.");
        return;
      }

      let list = [];
      snapshot.forEach((doc) => {
        console.log(doc.data());
        list.push(doc.data());
      });
      this.products = list;
    },
  },
};
</script>

<style lang="scss" scoped></style>

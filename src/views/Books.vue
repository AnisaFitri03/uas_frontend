<template>
    <div>
      <h1>Buku Online</h1>
      <router-link to="/books/add" class="btn btn-primary">Menambahkan Buku</router-link>
  
      <table class="table">
        <thead>
        <tr>
          <th>Code</th>
          <th>Judul</th>
          <th>Penulis</th>
          <th>Penerbit</th>
          <th>Tahun</th>
          <th>Tanggal</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.kode }}</td>
          <td>{{ book.judul }}</td>
          <td>{{ book.pengarang }}</td>
          <td>{{ book.penerbit }}</td>
          <td>{{ book.tahun }}</td>
          <td>{{ book.harga }}</td>
          <td>
            <router-link :to="`/books/edit/${book.kode}`" class="btn btn-primary">Edit</router-link>
            <button @click="deleteBook(book.kode)" class="btn btn-danger">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'App',
    data() {
      return {
        books: [],
      };
    },
    methods: {
      fetchBooks() {
        axios.get('http://localhost/buku/select_buku.php')
            .then(response => {
              this.books = response.data;
            })
            .catch(error => {
              console.error(error);
            });
      },
      deleteBook(kode) {
        if (confirm('Are you sure you want to delete this book?')) {
          axios.delete(`http://localhost/buku/deletebuku%20_tocode.php?kode=${kode}`)
              // eslint-disable-next-line no-unused-vars
              .then(response => {
                this.fetchBooks();
              })
              .catch(error => {
                console.error(error);
              });
        }
      },
    },
    mounted() {
      this.fetchBooks();
    },
  };
  </script>
  
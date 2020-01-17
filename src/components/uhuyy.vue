// <template>
//   <div>
//     <b-form @submit="onSubmit" @reset="onReset" style="margin: 5%">
//       <div class="d-flex justify-content-stretch align-item-center">
//       <b-form-group
//         id="input-group-1"
//         label="Reciever name:"
//         label-for="input-1"
//         style="width: 50%"
//       >
//         <b-form-input
//           id="input-1"
//           v-model="form.name"
//           type="text"
//           required
//           placeholder="Enter reciever name"
//         ></b-form-input>
//       </b-form-group>

//       <b-form-group id="input-group-2" label="Your name:" label-for="input-2">
//         <b-form-input
//           id="input-2"
//           v-model="form.sender"
//           type="text"
//           required
//           placeholder="Enter your name"
//           style="width: 222%"
//         ></b-form-input>
//       </b-form-group>

//       </div>
      
//       <b-form-group id="input-group-3" label="Reciever address:" label-for="input-3">
//         <b-form-input
//           id="input-3"
//           v-model="form.address"
//           type="text"
//           required
//           placeholder="Enter reciever address"
//         ></b-form-input>
//       </b-form-group>

//       <b-form-group id="input-group-4" label="Message:" label-for="input-4">
//         <b-form-textarea
//           id="input-4"
//           v-model="form.message"
//           type="text"
//           required
//           placeholder="Enter message"
//         ></b-form-textarea>
//       </b-form-group>

//       <b-form-group id="input-group-5" label="Image:" label-for="input-5">
//         <b-form-file
//           v-model="image"
//           placeholder="Choose an image or drop it here..."
//         ></b-form-file>
//       </b-form-group>

//       <b-button type="submit" variant="primary">Submit</b-button>
//     </b-form>
//   </div>
// </template>

// <script>
// import axios from 'axios'
// const baseUrl = 'http://localhost:3000'

// export default {
//     data() {
//       return {
//         form: {
//           name: '',
//           address: '',
//           message: '',
//           sender: '',
//           image: ''
//         }
//       }
//     },
//     methods: {
//       onSubmit(evt) {
//         evt.preventDefault()
//         axios({
//           url: `${baseUrl}/postcards`,
//           method: 'POST',
//           data: {
//             name: this.name,
//             address: this.address,
//             message: this.message,
//             sender: this.sender,
//             image: this.image
//           },
//           headers: {
//             access_token: localStorage.getItem('access_token')
//           }
//         })
//           .then(({ data }) => {
//             console.log(data)
//           })
//           .catch(err => {
//             Swal.fire({
//               icon: 'error',
//               title: 'Error:',
//               text: err
//             })
//           })
//       },
//       onReset(evt) {
//         evt.preventDefault()
//         this.form.name = ''
//         this.form.address = ''
//         this.form.message = ''
//         this.form.sender = ''
//         this.form.image = ''
//         // Trick to reset/clear native browser form validation state
//       }
//     }
//   }
// </script>

// <style>

// </style>
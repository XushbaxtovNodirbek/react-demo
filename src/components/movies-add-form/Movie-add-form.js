import { useContext, useState } from 'react' // reactdan Component classini import qilamiz

import './Movie-add-form.css' // MovieAddForm componentimiz uchun css faylimizni import qilamiz 
import { Context } from '../../context'

// MovieAddForm class componenti yaratamiz
// class MovieAddForm1 extends Component {
//   constructor(props){
//     super(props)
//     this.state = { // state ichida inputlarga tegishli qiymatlar bo'ladi
//       title: '',
//       countViewes: ''
//     }
//   }
//   ChangeHandler = (e) =>{ // inputlarga tegishli qiymatlarni state ichiga joylashtirish uchun funksiya
//     this.setState({
//       [e.target.name]: e.target.value // inputdagi name qiymati bilan state ichidagi name qiymati bir xil bo'lishi kerak
//     })// e.target.name = title yoki countViewes
//   }

//   addMovieHandler = e => { // form submit bo'lganda ishlaydigan funksiya
//     e.preventDefault()
//     if(this.state.title && this.state.countViewes){ // inputlarni to'ldirganligini tekshiramiz
//       this.props.addMovie(this.state)
//       this.setState({
//         title: '',
//         countViewes: ''
//       })
//     }else{ // agar inputlarni to'ldirmasangiz alert chiqaradi
//       alert('Iltimos, barcha maydonlarni to\'ldiring!')
//     }
//   }

//   render(){
//     const {title, countViewes} = this.state
//     return (
//       <div className='movies-add-form'>
//         <h3>Yangi kino qo'shish</h3>
//         <form className='add-form d-flex' onSubmit={this.addMovieHandler}>
//             {/* new movie title */}
//             <input 
//             value={title} onChange={this.ChangeHandler} 
//             name='title' type='text' className='form-control new-post-label' 
//             placeholder='Qanday kino?'/>
//             {/* new movie ko'rishlar soni */}
//             <input value={countViewes} name='countViewes'
//             onChange={this.ChangeHandler} type='number' 
//             className='form-control new-post-label' placeholder="Necha marotaba ko'rilgan?"/>
//             <button type='submit' className='btn btn-outline-dark'>
//                 Qo'shish
//             </button>
//         </form>
//       </div>
//     )
//   }
// }

const MovieAddForm = () => {
  const [title,setTitle] = useState('')
  const [countViewes,setCountViewes] = useState('')

  const {dispatch} = useContext(Context)
  const ChangeHandler = (e) =>{
    if(e.target.name === 'title'){
      setTitle(e.target.value)
    }else if(e.target.name === 'countViewes'){
      setCountViewes(e.target.value)
    }
  }

  const addMovieHandler = e => {
    e.preventDefault()
    if(title && countViewes){
      dispatch({type:"ADD_MOVIE",payload:{title,countViewes}})
      setTitle('')
      setCountViewes('')
    }else{
      alert('Iltimos, barcha maydonlarni to\'ldiring!')
    }
  }


  return (
    <div className='movies-add-form'>
        <h3>Yangi kino qo'shish</h3>
        <form className='add-form d-flex' onSubmit={addMovieHandler}>
            {/* new movie title */}
            <input 
            value={title} onChange={ChangeHandler} 
            name='title' type='text' className='form-control new-post-label' 
            placeholder='Qanday kino?'/>
            {/* new movie ko'rishlar soni */}
            <input value={countViewes} name='countViewes'
            onChange={ChangeHandler} type='number' 
            className='form-control new-post-label' placeholder="Necha marotaba ko'rilgan?"/>
            <button type='submit' className='btn btn-outline-dark'>
                Qo'shish
            </button>
        </form>
      </div>
  )
}

export default MovieAddForm

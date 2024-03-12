import React, { useEffect, useState } from 'react'
import { collection, addDoc, getDocs } from 'firebase/firestore' // นำเข้า function ที่เราจะใช้เพื่อเพิ่มข้อมูลลงใน firestore
import db from '../firebase' // นำเข้า config ของ firebase ที่เราได้สร้างไว้

function Todo() {
    const [todo, setTodo] = useState(""); // สร้าง state ชื่อ todos และ setTodos โดยเริ่มต้นเป็นค่าว่าง
    const [todos, setTodos] = useState([]); // สร้าง state ชื่อ todos และ setTodos โดยเริ่มต้นเป็นค่าว่าง

    const addTodo = async (e) => { // async function ที่เรียกใช้เมื่อมีการ submit form โดยส่ง event มาเป็น parameter
        e.preventDefault(); // ป้องกันการ refresh ของ browser จากการ submit form

        try {
            const docRef = await addDoc(collection(db, "todos"), { //await ค่าที่ได้จากการเรียกใช้ addDoc โดยส่ง collection ที่เราจะเพิ่มข้อมูลลงไป และข้อมูลที่เราจะเพิ่มลงไป
                todo: todo // สร้าง field ชื่อ todo และเก็บค่าที่เราได้จาก input
            }) // สร้าง document ใหม่ใน collection todos โดยส่งค่า todo ที่เราได้จาก input ไปเก็บ
            console.log("Document written with ID: ",docRef.id); // แสดงข้อความเมื่อเพิ่มข้อมูลสำเร็จ พร้อมกับแสดง id ของ document ที่เพิ่มเข้าไป
        } catch (error) {
            console.error("Error adding document: ",error); // แสดง error ถ้ามีการเพิ่มข้อมูลไม่สำเร็จ
        }
    }

    const fetchPost = async () => { // async function ที่เรียกใช้เมื่อ component ถูก mount หรือเริ่มต้นการทำงาน
        await getDocs(collection(db, "todos")) // รอให้ข้อมูลทั้งหมดใน collection todos ถูก fetch มา
            .then((querySnapshot) => { // รอให้ข้อมูลทั้งหมดถูก fetch มาแล้วทำการ map ข้อมูลที่ได้เพื่อเก็บไว้ใน state
                const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(), id: doc.id})) // ทำการ map ข้อมูลที่ได้เพื่อเก็บไว้ใน state โดยเพิ่ม field id ให้กับข้อมูลที่ได้ ...doc.data() คือข้อมูลทั้งหมดที่ได้จากการ fetch และ doc.id คือ id ของ document นั้นๆ
                setTodos(newData); 
                console.log(todos, newData);
            })
    }

    useEffect(() => {
        fetchPost()
    }, []); // ใช้ useEffect เพื่อเรียกใช้ fetchPost เมื่อ component ถูก mount หรือเริ่มต้นการทำงาน

  return (
    <div>
        <h1>Todo-App</h1>
        <div>
            <input type="text" placeholder='What do you want to do today ?' onChange={(e) => setTodo(e.target.value)} /> 
            <button type="submit" onClick={addTodo}>
                Submit
            </button>
        </div>
        <div> 
            {todos?.map((todo, i) => (
                <p key={i}>{todo.todo}</p>
            ))}
        </div>
    </div>
  )
}
export default Todo;
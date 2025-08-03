"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json" ;
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [recipes, setRecipes] = useState<Array<Schema["Recipe"]["type"]>>([]);
  
  // function listTodos() {
  //   client.models.Todo.observeQuery().subscribe({
  //     next: (data) => setTodos([...data.items]),
  //   });
  // }




  
  useEffect(() => {
    createRecipe
  }, []);
  function createRecipe() {

    console.log("CREATE")
    

    // client.models.Recipe.create({
    //   id: '1',
    //   recipe_title: 'Peanut Butter & Jelly'
    // })

    client.models.Recipe.observeQuery().subscribe({next: (data) => setRecipes([...data.items])})

    // client.models.Recipe.create({
    //   id: '1',
    //   recipe_title: 'PB & J'
    // });
    
    
     
    // client.models.Recipe.create({
    //   id: 2,
    //   recipe_title: 'Spaghetti'
    // });
      

    }
  // function createTodo() {
  //   client.models.Todo.create({
  //     content: window.prompt("Todo content"),
  //   });
  // }

  return (
    <main>
      <h1>My todos</h1>
      <button onClick={createRecipe}>+ new</button>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul> */}
      <ul>
        {recipes.map((item) => (
          <li key={item.id}>{item.recipe_title}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
          Review next steps of this tutorial.
        </a>
      </div>
    </main>
  );
}

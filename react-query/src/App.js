
import { useMutation, useQuery, useQueryClient, } from '@tanstack/react-query';
import './App.css';

function App() {
  const queryClient = useQueryClient()
  const {data,error,isLoading} = useQuery({
    queryKey:['posts'],
    queryFn: () => 
       fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()),
    // staleTime: 60000,
    
    // refetchInterval: 4000,
    // refetchOnWindowFocus:false,
    // retry:5
    
    
  })
  const {mutate,isError,isPending} = useMutation({
    mutationFn: (newPost) => 
         fetch("https://jsonplaceholder.typicode.com/posts",
          {
            method:"POST",
            body: JSON.stringify(newPost),
            headers: {"Content-type":"application/json; charset=UTF-8"}
          }
         ).then(res => res.json()),
    onSuccess: (newPost) => {
      console.log(newPost,"NEWPISS")
      queryClient.setQueryData(["posts"], (oldPosts) => [...oldPosts, newPost])
    }
  })
  if(error || isError) return <div>There was an Error</div>

  if(isLoading) return <div>Data is Loading...</div>
  return (
    <div className="App">
      {isPending && <div>Data is Loading</div>}
      <button onClick={() => mutate({
        userId:6000,
        title: "This is thr title",
        body: "tgis is the bidy"
      })}>Add Post</button>
      {data.map((todo)  => (
        <div>
           <h1>ID: {todo.id}</h1>
           <h1>Title: {todo.title}</h1>
           <h1>Body: {todo.body}</h1>
        </div>
      )) }
    </div>
  );
}

export default App;

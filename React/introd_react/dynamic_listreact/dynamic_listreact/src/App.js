

function App() {


  const items=["React","Javascript","CSS"]
  return (

  
  <>

{items.map((it,id)=>{

return (
<li key={id} style={{ fontSize: "20px" }}>
            {it}
          </li>
)
})}
  </>
  )
}

export default App;

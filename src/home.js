import Products from './Products';
import React,{useState} from 'react'
function Home(){
    const [search,setSearch] = useState('');
    const [data,setData] = useState([]);
    const YOUR_APP_ID = "8d80745d";
    const YOUR_APP_KEY ="09613d48cbaf8661061c379f327ef796";
    const submitHandler = e =>{
        e.preventDefault();
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=6&calories=591-722&health=alcohol-free`).then(
        response => response.json()
        ).then(
        data => setData(data.hits)
        )
    }
    return(
        <div className='body'>
            
            <h5>Search Food Item with Calorie</h5>
            <form onSubmit={submitHandler} style={{height:"300px"}}>
            <center>
                <input class="border" type="text" value={search} onChange={(e) => setSearch(e.target.value)}/> &nbsp;
                <input class="border" type="submit" className="btn btn-primary" value="Search"/>
            </center>
            </form>
            {data.length>=1 ? <Products  data={data}/>:null}
        
        </div>
    )
}

export default Home
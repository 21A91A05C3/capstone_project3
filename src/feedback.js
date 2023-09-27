export default function Feedback(){
    return (
        <>
            <form>
                <center>
                        <textarea rows={10} cols={50} style={{marginTop:"10px"}} className="border"></textarea><br/>
                        <input type="button" value={"submit"} />
                </center>
                
            </form>
        </>
    );
}
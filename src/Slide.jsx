import './Slide.css'


function Slide(){
    const images =  function(){
        var count = 6;
        var arg = ['https://images.unsplash.com/photo-1619271857926-c3cf380f0047?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29va2llc3x8fHx8fDE2NDM5ODM0MzM&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600', 
        'https://images.unsplash.com/photo-1549438247-223f2db1dd29?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8YmFrZXJ5fHx8fHx8MTY0Mzk4NTYyOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600',
         'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8YmFrZXJ5fHx8fHx8MTY0Mzk4NTcxMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600', 
         ];
        return (<>
        <img src={arg[0]} alt="" />
        <img src={arg[1]} alt="" />
        <img src={arg[2]} alt="" />
        <img src={arg[0]} alt="" />
        </>)
    }
    return(<>
    <div className="slide-container">
        <div className="emptyy"></div>
        <p>latest cookies</p>
        <div className="all">
            {images()}
        </div>
    </div>
    </>)
}



export default Slide
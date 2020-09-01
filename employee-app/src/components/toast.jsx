import React from 'react';

const Toast = (props) => {

    const style1 = {
        position: "relative",
        minHeight: 200,
        
    }

    const style2 = {
        
        position: "absolute",
        top: 0,
        right: 0

    }
    return ( 

        <div style={style1}>
            <div className="toast" style={style2}>
                <div class="toast-header">
                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div className="toast-body">
                    Employee details saved
                </div>
            </div>
        </div>


    );
}
 
export default Toast;
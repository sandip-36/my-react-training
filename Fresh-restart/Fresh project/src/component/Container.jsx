import contcss from "./Container.module.css"

const Container = function (props){
    return<>
        <div className={contcss.contain}>
            {props.children}
        </div>
    </>
};

export default Container;
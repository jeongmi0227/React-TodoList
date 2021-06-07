import React, { Component} from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TodoItem extends Component{
    render(){

        // 비구조 할당으로 this.props의 있는 done,children,toToggle,onRemove 레퍼런스를 만들어주었음
        const {done,children,onToggle,onRemove}=this.props;
        console.log(onToggle);
        return(
            <div className={cx('todo-item')} onClick={onToggle}>
                <input className={cx('tick')} type="checkbox" checked={done} readOnly/>
                <div className={cx('text',{done})}>{children}</div>
                <div className={cx('delete')} onClick={(e)=>{
                    onRemove();
                    e.stopPropagation();
                    }
                }>[지우기]</div>
            </div>
                
        );
    }

}
export default TodoItem;
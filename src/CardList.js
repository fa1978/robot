import React from 'react';
import Card from './Card' ;

function CardList({robots}){
	//const cardComponent=
	return (
		<div>
		  {
             robots.map((usr,i)=>{
                  return (<Card key={i} 
                  	      id={usr.id}  
                  	      name={usr.name} 
                  	      email={usr.email}/>);
	                        })
         }
		</div>
		);
}

export default CardList;
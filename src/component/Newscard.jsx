import React from "react";
import img from "../imgs/3C8A5714.jpg"
export default function newscaed(props) {
  const news = props.news;
  
  
  
  return (
    <a href={news.url} target="_blank"
      className="flex md:p-3 cursor-pointer px-1 rounded-md overflow-hidden gap-3 flex-col border h-[200px] w-[300px]"
    >
      <div className="flex justify-between gap-2 overflow-hidden items-start h-3/6">
        <h4 className="font-semibold">{(news.name.length>50)?(news.name.slice(0,50)):(news.name)}...</h4>

        <img className="h-[80px] rounded-md" src={(news.image)?(news.image.thumbnail.contentUrl):(img)} alt="" />
      </div>
      <div className="flex flex-col gap-4 h-3/6 ">
        <p className="">
        {(news.description.length>100)?(news.description.slice(0,100)):(news.description)}
         
        </p>
      </div>
    </a>
  );
}

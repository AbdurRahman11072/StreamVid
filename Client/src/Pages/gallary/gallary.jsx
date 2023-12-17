import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
  

const Gallary = () => {   
    return (
        <div>
 
    {/* <!--image card layout start--> */}
    <div className="container mx-auto">
      {/* <!--image row start--> */}
      <div id="row">
        {/* <!--image card start--> */}
        <div id="image">
          <img className='w-full h-[250px]' src="/A1.jpg" alt=""/>
          <div id="details">
            <h2>Music  <span>Festivals</span></h2>
           
            <div id="more">
              <a href="#" id="read-more">Read <span>More</span></a>
              <div className="icon-links">
                <a href="#"><i id="fas fa-heart"></i></a>
                <a href="#"><i id="fas fa-eye"></i></a>
                <a href="#"><i id="fas fa-paperclip"></i></a>
              </div>
            </div>
          </div>
        </div>
        {/* <!--image card end--> */}
        {/* <!--image card start--> */}
        <div id="image">
          <img clasid='w-full h-[250px]' src="/TheaterEvent.jpg" alt=""/>
          <div id="details">
            <h2>Performing  <span>Arts</span></h2>
            
            <div id="more">
              <a href="#" id="read-more">Read <span>More</span></a>
              <div id="icon-links">
                <a href="#"><i id="fas fa-heart"></i></a>
                <a href="#"><i id="fas fa-eye"></i></a>
                <a href="#"><i id="fas fa-paperclip"></i></a>
              </div>
            </div>
          </div>
        </div>
        {/* <!--image card end--> */}
        {/* <!--image card start--> */}
        <div id="image">
          <img className='w-full h-[250px]' src="/SportEvent.jpg" alt=""/>
          <div id="details">
            <h2> Sports <span>Event</span></h2>
            
            <div id="more">
              <a href="#" id="read-more">Read <span>More</span></a>
              <div id="icon-links">
                <a href="#"><i id="fas fa-heart"></i></a>
                <a href="#"><i id="fas fa-eye"></i></a>
                <a href="#"><i id="fas fa-paperclip"></i></a>
              </div>
            </div>
          </div>
        </div>
        {/* <!--image card end--> */}
      </div>
      {/* <!--image row end--> */}
      {/* <!--image row start--> */}
      <div id="row">
        {/* <!--image card start--> */}
        <div id="image">
          <img className='w-full h-[250px]' src="/comedy.jpg" alt=""/>
          <div id="details">
            <h2>Comedy <span>Show</span></h2>
           
            <div id="more">
              <a href="#" id="read-more">Read <span>More</span></a>
              <div id="icon-links">
                <a href="#"><i id="fas fa-heart"></i></a>
                <a href="#"><i id="fas fa-eye"></i></a>
                <a href="#"><i id="fas fa-paperclip"></i></a>
              </div>
            </div>
          </div>
        </div>
        {/* <!--image card end--> */}
        {/* <!--image card start--> */}
        <div id="image">
          <img className='w-full h-[250px]' src="/Filmscreen.jpg" alt=""/>
          <div id="details">
            <h2>Film <span>Premieres</span></h2>
            
            <div id="more">
              <a href="#" id="read-more">Read <span>More</span></a>
              <div id="icon-links">
                <a href="#"><i id="fas fa-heart"></i></a>
                <a href="#"><i id="fas fa-eye"></i></a>
                <a href="#"><i id="fas fa-paperclip"></i></a>
              </div>
            </div>
          </div>
        </div>
        {/* <!--image card end--> */}
        {/* <!--image card start--> */}
        <div id="image">
          <img className='w-full h-[250px]' src="/E-sports.webp" alt=""/>
          <div id="details">
            <h2>E-sports <span>Tournament</span></h2>
            
            <div id="more">
              <a href="#" id="read-more">Read <span>More</span></a>
              <div className="icon-links">
                <a href="#"><i id="fas fa-heart"></i></a>
                <a href="#"><i id="fas fa-eye"></i></a>
                <a href="#"><i id="fas fa-paperclip"></i></a>
              </div>
            </div>
          </div>
        </div>
        {/* <!--image card end--> */}
      </div>
      {/* <!--image row end--> */}
    </div>
    {/* <!--image card layout end--> */}

            
        </div>
    );
};

export default Gallary;
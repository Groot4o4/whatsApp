import React from 'react'
import "./Sidebar.css"
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';

import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebar_header">
               <Avatar src="https://sm.ign.com/t/ign_in/news/j/james-gunn/james-gunn-clarifies-again-baby-groot-is-groots-son-in-guard_hct8.1200.jpg"/>
               <div className="header_r">
                <IconButton >
                   <DonutLargeIcon/>
                   
                </IconButton>
                <IconButton >
                   
                   <ChatIcon/>
                  
                </IconButton>
                <IconButton >
                   
                   <MoreVertIcon/>
                </IconButton>

               </div>
              
           </div>
           <div className="sidebar_search">
              <div className="search">
                 <SearchOutlinedIcon/>
                 <input type="text"  placeholder="Search or start new chat"/>

              </div>

           </div>
         
         <div className="sidebar_chats">
         
         <SidebarChat/>
         <SidebarChat/>
         <SidebarChat/>


         </div>

        </div>
    )
}

export default Sidebar

import React, { useState } from "react";
import "./Timeline.css";
import Suggestion from "./suggestion/Suggestion";
import Post from "./posts/Post";
import Myday from "./myday/Myday";
import { UserProfileData } from "./userData/UserProfileData";
import UserProfile from "./userProfile/UserProfile";
import { UserListMyDay } from "./userData/UserListMyday";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user_profile:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
      user: "saujan22",
      postImage:
        "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      likes: 25,
      timestamp: "2d",
    },
    {
      user_profile:
        "https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-1/315558506_10167654136130455_2677069413286394029_n.jpg?stp=dst-jpg_p200x200&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=RdcJX7-UTZQAX_TDK6A&_nc_ht=scontent.fktm20-1.fna&oh=00_AfD3Sg3KXm8ydG_xyHxmoUK9XowjzMiLFfYLkd7YxWKVZA&oe=64BFCDC4",
      user: "ManCity",
      postImage:
        "https://cdn.britannica.com/80/237080-050-9682688F/Manchester-City-Football-Club-team-celebrates-with-Premier-League-trophy-championship-May-22-2022.jpg",
      likes: 25,
      timestamp: "2d",
    },
    {
      user_profile:
        "https://scontent.fktm20-1.fna.fbcdn.net/v/t1.6435-1/190108336_322648402555040_2100790391455013605_n.jpg?stp=dst-jpg_p200x200&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=6RH1oTeUuFQAX-1wEkk&_nc_ht=scontent.fktm20-1.fna&oh=00_AfCjcGFADF2Kc8wFnSnPLVYUIdFK775AHNQkiZaM3IBYIA&oe=64E20F76",
      user: "Cristiano Ronaldo",
      postImage:
        "https://e0.365dm.com/22/11/1600x900/skysports-portugal-uruguay_5980862.jpg?20221128192646",
      likes: 25,
      timestamp: "2d",
    },
    {
      user_profile:
        "https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/357734715_818736009608424_8151441333529277291_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dN09izaMQR4AX9sh20r&_nc_oc=AQnV08WEm9446eSF6wc8SeCPV2HDrPVnz0SRX5qVUa6DF1BExlegI1KSJ7MikoyOWZkoLg6Zk3i1P7I-gibcNYG8&_nc_ht=scontent.fktm20-1.fna&oh=00_AfDV_k-jFpbLiZuJNl3davLi-TbZxlgAkRFNr4U3kjnqMA&oe=64C03E55",
      user: "Barcelona",
      postImage:
        "https://www.fcbarcelona.com/photo-resources/2021/08/09/c4f2dddd-2152-4b8b-acf8-826b4377e29d/Camp-Nou-4.jpg?width=840&height=525",
      likes: 2500,
      timestamp: "1d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__left-top">
          {UserListMyDay.map((userMyday) => (
            <Myday
              username={userMyday.username}
              user_image={userMyday.user_image}
            />
          ))}
        </div>
        <div className="timeline__left-bottom">
          {posts.map((post) => (
            <Post
              user_profile={post.user_profile}
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        {UserProfileData.map((userProfile) => (
          <UserProfile
            username={userProfile.username}
            account_name={userProfile.account_name}
            user_image={userProfile.user_image}
          />
        ))}
        <Suggestion />
      </div>
    </div>
  );
}

export default Timeline;

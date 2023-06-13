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
        "https://scontent.fktm20-1.fna.fbcdn.net/v/t1.6435-9/133303496_1858316614309327_1199946036942175852_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UUP6Vasoad8AX9EQJr1&_nc_ht=scontent.fktm20-1.fna&oh=00_AfDaMgORJdkGEw0ihlMIKO6uh4aAd4Ebl9aQNRQ-sdJrKQ&oe=64AFF938",
      user: "suman11",
      postImage:
        "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      likes: 25,
      timestamp: "2d",
    },
    {
      user_profile:
        "https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/315558506_10167654136130455_2677069413286394029_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qMdbBhND714AX8h4QU1&_nc_ht=scontent.fktm20-1.fna&oh=00_AfCIh404n-rFMACnUQCmV3WRjKdasYhdOhZmgwLOoCh77g&oe=648C7EB4",
      user: "ManCity",
      postImage:
        "https://cdn.britannica.com/80/237080-050-9682688F/Manchester-City-Football-Club-team-celebrates-with-Premier-League-trophy-championship-May-22-2022.jpg",
      likes: 25,
      timestamp: "2d",
    },
    {
      user_profile:
        "https://scontent.fktm20-1.fna.fbcdn.net/v/t1.6435-9/190108336_322648402555040_2100790391455013605_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=XokZWVyPYGMAX8e7b28&_nc_ht=scontent.fktm20-1.fna&oh=00_AfB1rc4RayDp-5hV0V5sJtBxVWTQWba0oeu8BM5s0_SsnQ&oe=64AFEA40",
      user: "Cristiano",
      postImage:
        "https://e0.365dm.com/22/11/1600x900/skysports-portugal-uruguay_5980862.jpg?20221128192646",
      likes: 25,
      timestamp: "2d",
    },
    {
      user_profile:
        "https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/338999942_655877759629995_5268282844094135027_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wHelYhqzvy4AX-atHjv&_nc_ht=scontent.fktm20-1.fna&oh=00_AfDtFrtdlxt_1RQfR_XRbkpd_r1YgnRbhMq2uCD_ydY1nA&oe=648DAA87",
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

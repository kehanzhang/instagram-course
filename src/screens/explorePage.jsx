import React from 'react';
import PostPreview from '../components/postPreview';

function ExplorePage() {
  const posts = [ 
    "https://pub-8d448faaa1ab42978ed5c4b22198f47d.r2.dev/instagram-mock-data/leomessi/3410639912632228691_640806256_0.jpg",
    "https://pub-8d448faaa1ab42978ed5c4b22198f47d.r2.dev/instagram-mock-data/petecashmore/2168562476500991849_559436192_0.jpg", 
    "https://pub-8d448faaa1ab42978ed5c4b22198f47d.r2.dev/instagram-mock-data/leomessi/3425185882636073880_640806256_0.jpg", 
    "https://pub-8d448faaa1ab42978ed5c4b22198f47d.r2.dev/instagram-mock-data/easterEgg2.png",
    "https://pub-8d448faaa1ab42978ed5c4b22198f47d.r2.dev/instagram-mock-data/thisisbillgates/3404232474489464708_5630155732.jpg", 
    "https://pub-8d448faaa1ab42978ed5c4b22198f47d.r2.dev/instagram-mock-data/selenagomez/3430089527765861061_460563723_5.jpg",
    "https://pub-8d448faaa1ab42978ed5c4b22198f47d.r2.dev/instagram-mock-data/discordPlug.png",
    "https://pub-8d448faaa1ab42978ed5c4b22198f47d.r2.dev/instagram-mock-data/instagram/3433174654691925255_25025320_0.jpg", 
    "https://pub-8d448faaa1ab42978ed5c4b22198f47d.r2.dev/instagram-mock-data/instagram/3428097881687418401_25025320_1.jpg", 
    "https://pub-8d448faaa1ab42978ed5c4b22198f47d.r2.dev/instagram-mock-data/ariannahuff/3429447865368542317_25193717_0.jpg",
    "https://pub-8d448faaa1ab42978ed5c4b22198f47d.r2.dev/instagram-mock-data/ariannahuff/3430229409222096272_25193717.jpg", 
    "https://pub-8d448faaa1ab42978ed5c4b22198f47d.r2.dev/instagram-mock-data/cristiano/3426772538913503225_173560420_3.jpg",
    "https://pub-8d448faaa1ab42978ed5c4b22198f47d.r2.dev/instagram-mock-data/ariannahuff/3423590443088112049_25193717.jpg", 
    "https://pub-8d448faaa1ab42978ed5c4b22198f47d.r2.dev/instagram-mock-data/cristiano/3416415572729139927_173560420_0.jpg",
     "https://pub-8d448faaa1ab42978ed5c4b22198f47d.r2.dev/instagram-mock-data/loveparents.png"
    ];

  return (
    <div className="grid grid-cols-3 h-screen w-screen">
      {posts.map((imageUrl, index) => (
        <PostPreview key={index} imageUrl={imageUrl}/>
      ))}
    </div>
  );
}

export default ExplorePage;
import React, { useState } from 'react';
import './Home.css';
import FirstUser from '../Photos/User-1.jpg';
import SecondUser from '../Photos/User-2.jpg';
import ThirdUser from '../Photos/User-3.jpg';
import FourthUser from '../Photos/User-4.jpg';
import FifthUser from '../Photos/User-5.jpg';
import SixthUser from '../Photos/User-6.jpg';
import SeventhUser from '../Photos/User-7.jpg';
import EighthUser from '../Photos/User-8.jpg';

function Home({ name }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postedPhotos, setPostedPhotos] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const [commentedPhotos, setCommentedPhotos] = useState([]);

  const handleChoosePhoto = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(false);
  };

  const handlePostPhoto = () => {
    if (selectedPhoto) {
      const postText = prompt("Write a caption:");
      if (postText !== null) {
        setPostedPhotos([...postedPhotos, { photo: selectedPhoto, text: postText }]);
        setSelectedPhoto(null);
      }
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedPhoto(URL.createObjectURL(file));
      setIsModalOpen(false);
    }
  };

  const handleCommentInputChange = (event) => {
    setCommentInput(event.target.value);
  };

const handleAddComment = (index) => {
  if (commentInput.trim() !== '') {
    const updatedCommentedPhotos = [...commentedPhotos];
    
    if (updatedCommentedPhotos[index]) {
      updatedCommentedPhotos[index] = [commentInput, ...updatedCommentedPhotos[index]];
    } else {
      updatedCommentedPhotos[index] = [commentInput];
    }

    setCommentedPhotos(updatedCommentedPhotos);
    setCommentInput('');
  }
};

const handleToggleLike = (index) => {
  const updatedPostedPhotos = [...postedPhotos];
  updatedPostedPhotos[index].liked = !updatedPostedPhotos[index].liked;
  setPostedPhotos(updatedPostedPhotos);
};

const handleDeletePhoto = (index) => {
  const updatedPostedPhotos = [...postedPhotos];
  updatedPostedPhotos.splice(index, 1);
  setPostedPhotos(updatedPostedPhotos);
};
  

  return (
    <div className='body'>
      <div className='Instagramoptions'>
        <div className='Usernamediv'>
          <h2 className='Username'>{name ? `${name}` : ''}</h2>
        </div>
        <div className='Controlzzz'>
          <i className='fa-solid fa-house'></i> <h2>Home</h2>
        </div>
        <div className='Controlzzz'>
          <i className='fa-solid fa-magnifying-glass'></i>
          <h2>Search</h2>
        </div>
        <div className='Controlzzz'>
          <i className='fa-solid fa-film'></i>
          <h2>Reels</h2>
        </div>
        <div className='Controlzzz'>
          <i className='fa-solid fa-message'></i>
          <h2>Messages</h2>
        </div>
        <div className='Controlzzz'>
          <i className='fa-solid fa-user'></i>
          <a className='Linkkkk' href='editp'>
            <h2>Edit Profile</h2>
          </a>
        </div>
        <div className='Controlzzz'>
          <i className='fa-solid fa-right-from-bracket'></i>
          <h2>
            <a className='Linkkkk' href='/'>
              Logout
            </a>
          </h2>
        </div>
      </div>
      <div className='umumiy'>
        <div className='Istoriya'>
          <div>
            <img className='Istoriyauser' src={FirstUser} alt='' />
          </div>
          <div>
            <img className='Istoriyauser' src={SecondUser} alt='' />
          </div>
          <div>
            <img className='Istoriyauser' src={ThirdUser} alt='' />
          </div>
          <div>
            <img className='Istoriyauser' src={FourthUser} alt='' />
          </div>
          <div>
            <img className='Istoriyauser' src={FifthUser} alt='' />
          </div>
          <div>
            <img className='Istoriyauser' src={SixthUser} alt='' />
          </div>
          <div>
            <img className='Istoriyauser' src={SeventhUser} alt='' />
          </div>
          <div>
            <img className='Istoriyauser' src={EighthUser} alt='' />
          </div>
        </div>
        <div className='postarea'>
          <i className='fa-solid fa-circle-plus'></i>
          <h2 className='Create_new_post'>Create new post</h2>
          <input className='postchooseinput' type='file' accept='image/*' onChange={handleFileChange} />
          {selectedPhoto && <p>Selected Photo: {selectedPhoto}</p>}
          <div><button className='Post_button' onClick={handlePostPhoto}>Post Photo</button></div>
        </div>
        {isModalOpen && (
          <div className='modal'>
            <img src={FirstUser} alt='User 1' onClick={() => handleChoosePhoto('User-1.jpg')} />
            <img src={SecondUser} alt='User 2' onClick={() => handleChoosePhoto('User-2.jpg')} />
            <img src={ThirdUser} alt='User 3' onClick={() => handleChoosePhoto('User-3.jpg')} />
            <img src={FourthUser} alt='User 4' onClick={() => handleChoosePhoto('User-4.jpg')} />
            <img src={FifthUser} alt='User 5' onClick={() => handleChoosePhoto('User-5.jpg')} />
            <img src={SixthUser} alt='User 6' onClick={() => handleChoosePhoto('User-6.jpg')} />
            <img src={SeventhUser} alt='User 7' onClick={() => handleChoosePhoto('User-7.jpg')} />
            <img src={EighthUser} alt='User 8' onClick={() => handleChoosePhoto('User-8.jpg')} />
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        )}
      <div className='posted-photos'>
  {postedPhotos.map((postedItem, index) => (
    <div key={index} className='posted-photo'>
      <img src={postedItem.photo} alt={`Posted ${index}`} width={600} height={400} />
      <div className='likeandcaption'>
      <button
                className={`likebbb ${postedItem.liked ? 'liked' : ''}`}
                onClick={() => handleToggleLike(index)}
              >
                <h3>
                  <i className="fa-regular fa-heart"></i>
                </h3>
              </button>
      <h2 className='postedphotonomi'>{postedItem.text}</h2>
      </div>
      <div>
        <input className='commentinput'
          type='text'
          value={commentInput}
          onChange={handleCommentInputChange}
          placeholder='Write a comment...'
        />
        <button className='Post_comment_button' onClick={() => handleAddComment(index)}>Post</button>
      </div>
      {commentedPhotos[index] && (
        <div className='comment-section'>
          {commentedPhotos[index].map((comment, commentIndex) => (
            <p key={commentIndex} className='comment'>
              {comment}
            </p>
          ))}
        </div>
      )}
      <button
                className='Delete_button'
                onClick={() => handleDeletePhoto(index)}
              >
                Delete
              </button>
    </div>
  ))}
</div>


      </div>
    </div>
  );
}

export default Home;

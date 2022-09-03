import './index.scss';
function ProfileCard({ avatar, alt }) {
  return (
    <div className="profile-card">
      <img src={avatar} alt={alt}></img>
    </div>
  );
}

export default ProfileCard;

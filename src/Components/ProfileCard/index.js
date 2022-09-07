import './index.scss';
function ProfileCard({ avatar, alt }) {
  return (
    <img className="profile-card" src={avatar} alt={alt}></img>
  );
}

export default ProfileCard;

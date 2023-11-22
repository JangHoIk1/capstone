import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import HeaderTitle from './HeaderTitle';

const Teams = () => {
  return (
    <div className="teams">
      <HeaderTitle title="팀 소개" subTitle="간략한 팀 소개" />
      <Link to="/team">
        <Button />
      </Link>
    </div>
  );
};

export default Teams;

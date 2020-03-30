import HomeComponent from '../Home';
import { renderWithRedux } from '../../helpers/enzyme';

describe('Page Home', () => {
  it('should render gracefully', done => {
    const Home = () => ({
      members: 0,
      repos: 0,
      teams: 0,
      status: 200,
      getHomeStats: jest.fn(),
    });
    renderWithRedux(HomeComponent, { Home });
    done();
  })
});

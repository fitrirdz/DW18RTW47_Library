import React from 'react';
import SideBar from '../components/SideBar';

const Profile = () => {
  return (
    <div>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-3'>
            <SideBar />
          </div>

          <div className='col-9'>
            <div
              className='jumbotron py-4'
              style={{ backgroundColor: '#FDEDE6' }}
            >
              <div className='row'>
                <div className='col-9 d-flex flex-column justify-content-between'>
                  <div className='row'>
                    <div className='col-xs-6 cover-tile-image'>
                      <svg viewBox='0 0 24 24' className='icon mr-1'>
                        <path
                          fill='currentColor'
                          d='M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z'
                        />
                      </svg>
                    </div>

                    {/* Email */}
                    <div className='col-xs-6 cover-tile-text'>
                      <b>fitri@mail.com</b>
                      <p className='subtitle'>Email</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-xs-6 cover-tile-image'>
                      <svg viewBox='0 0 24 24' className='icon mr-1'>
                        <path
                          fill='currentColor'
                          d='M12,4A6,6 0 0,1 18,10C18,12.97 15.84,15.44 13,15.92V18H15V20H13V22H11V20H9V18H11V15.92C8.16,15.44 6,12.97 6,10A6,6 0 0,1 12,4M12,6A4,4 0 0,0 8,10A4,4 0 0,0 12,14A4,4 0 0,0 16,10A4,4 0 0,0 12,6Z'
                        />
                      </svg>
                    </div>

                    {/* Gender */}
                    <div className='col-xs-6 cover-tile-text'>
                      <b>Female</b>
                      <p className='subtitle'>Gender</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-xs-6 cover-tile-image'>
                      <svg viewBox='0 0 24 24' className='icon mr-1'>
                        <path
                          fill='currentColor'
                          d='M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z'
                        />
                      </svg>
                    </div>

                    {/* phone */}
                    <div className='col-xs-6 cover-tile-text'>
                      <b>0812-3456-7890</b>
                      <p className='subtitle'>Mobile phone</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-xs-6 cover-tile-image'>
                      <svg viewBox='0 0 24 24' className='icon mr-1'>
                        <path
                          fill='currentColor'
                          d='M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z'
                        />
                      </svg>
                    </div>

                    {/* address */}
                    <div className='col-xs-6 cover-tile-text'>
                      <b>Peundeuy, Mangkubumi, Tasikmalaya</b>
                      <p className='subtitle'>Address</p>
                    </div>
                  </div>
                </div>
                <div className='col-3'>
                  <img
                    alt=''
                    src={require('../images/Toothless.jpg')}
                    className='rounded shadow-sm'
                    style={{ height: '10.2rem', width: '10.2rem' }}
                  ></img>
                  <button className='Button-o mt-3 py-2'>
                    Change Photo Profile
                  </button>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <h3>My Books</h3>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-3'>
                <div className='card' style={{ border: 'none' }}>
                  <img alt='' src={require('../images/BlockChain.svg')}></img>
                  <h5>Blockchain with Hyperledger</h5>
                  <p className='subtitle'>Author</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

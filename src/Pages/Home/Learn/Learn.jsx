import learn from'../../../assets/learn.webp'
import app1 from '../../../assets/app1.webp'
import app2 from '../../../assets/app2.webp'
const Learn = () => {
    return (
        <div className='flex bg-[#1ea69a] pt-36 gap-36 items-center'>
            <div className='pl-32'>
                <img src={learn} alt="" />
            </div>
            <div className='text-white'>
                <p className='uppercase text-xl mb-6'>Learn the go</p>
                <p className='text-3xl'>Access your courses anywhere,<br></br>
                anytime & prepare with practice tests</p>
                <div className='mt-6'>
                    <img className='inline mr-6' src={app1} alt="" />
                    <img className='inline' src={app2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Learn;
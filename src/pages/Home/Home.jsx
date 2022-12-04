import React from 'react';
import Welcome from "./Welcome/Welcome";
import Choose from "./Choose/Choose";
// import Shopping from "./Shopping/Shopping";
import Review from "./Review/Review";
import Questions from "./Questions/Questions";
import Cooperation from "./Cooperation/Cooperation";
import Invite from "./Invite/Invite";

const Home = () => {
    return (
        <main>
            <Welcome/>
            <Choose/>
            {/*<Shopping/>*/}
            <Review/>
            <Questions/>
            <Cooperation/>
            <Invite/>
        </main>
    );
};

export default Home;
import React from "react";
import Alert from "react-bootstrap/Alert";

const Profile = () => {
    return (
        <div className={'content'}>
            <div>
                <img className={'Varian'}
                     src={'https://img5.goodfon.ru/wallpaper/nbig/1/' + 'cf/qichao-wang-by-qichao-wang-varian-wrynn-characters' + '-concept-a.jpg'}
                     alt={'Varian Rinn'}/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                <Alert key={'info'} variant={'info'}>
                    My posts
                </Alert>
                <div>
                    <Alert key={'dark'} variant={'dark'}>
                        new post
                    </Alert>
                </div>
                <div>
                    <Alert key={'light'} variant={'light'}>
                        post1
                    </Alert>
                </div>
                <div>
                    <Alert key={'light'} variant={'light'}>
                        post2
                    </Alert>
                </div>
                <div>
                    <Alert key={'light'} variant={'light'}>
                        post3
                    </Alert>
                </div>
            </div>
        </div>)
}

export default Profile
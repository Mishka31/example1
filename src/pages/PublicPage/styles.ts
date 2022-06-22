import styled from 'styled-components';
import { colors, fonts } from 'constants/index';
import { Button } from 'antd';

export const Page = styled.section`
    padding: 1px 12px;
    min-height: 100vh;
    width: 100%;
    background-color: ${colors.homeBgr};
    background-image: url(./images/bg-image.png);
    background-repeat: no-repeat;
`;

export const ProfileContainer = styled.section`
    margin-right: auto;
    margin-left: auto;
    margin-top: 80px;
    max-width: 800px;
    padding: 0px 12px;
    padding-bottom: 12px;
    border: 1px solid ${colors.signUpForm};
    background-color: ${colors.formWrapperBgr};
    color: ${colors.signUpFormColor};
    position: relative;
`;

export const TitleEmpty = styled.h1`
    font-size: x-large;
    margin-top: 14px;
    margin-bottom: 20px;
    text-align: center;
    color: ${colors.navColor};
`;
export const Title = styled.h1`
    display: flex;
    font-size: x-large;
    margin-top: 22px;
    margin-left: 15px;
    color: ${colors.navColor};
`;
export const Line = styled.div`
    width: 93%;
    border-bottom: 0.5px solid rgba(76, 175, 80, 0.3);
    margin-bottom: -5px;
    margin-top: 12px;
`;
export const Sections = styled.h3`
    margin-top: 8px;
    margin-left: 25px;
    color: ${colors.navColor};
`;
export const SectionsUl = styled.div`
    margin-top: 8px;
    margin-left: 25px;
    font-size: large;
    color: ${colors.navColor};
`;

export const Description = styled.p`
    font-size: ${fonts.titlesOfProfile};
    margin-top: 15px;
    margin-left: 35px;
    color: ${colors.titleOfSectionsProfile};
`;
export const Avatar = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin: 5px;
`;
export const ButtonSet = styled(Button)`
    display: flex;
    background: none;
    border: 1px solid white;
    color: #fff;
    margin-right: 12px;
    margin-bottom: 12px;
    :hover {
        background: ${colors.black};
        border: 1px solid #4caf50;
        color: ${colors.brandColor};
    }

    :focus {
        background: ${colors.brandColor};
        border: 1px solid ${colors.brandColor};
        color: ${colors.black};
    }
`;
export const ButtonBack = styled(Button)`
    display: flex;
    background: none;
    border: 1px solid white;
    color: #fff;
    margin-top: 4px;
    margin-right: 20%;
    margin-bottom: 12px;
    :hover {
        background: ${colors.black};
        border: 1px solid #4caf50;
        color: ${colors.brandColor};
    }

    :focus {
        background: ${colors.brandColor};
        border: 1px solid ${colors.brandColor};
        color: ${colors.black};
    }
`;

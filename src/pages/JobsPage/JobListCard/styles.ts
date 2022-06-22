import styled from 'styled-components';
import { Button } from 'antd';
import { colors, fonts } from 'constants/index';

export const Page = styled.div`
    padding: 78px 12px 12px 12px;
    width: 100%;
`;

export const Title = styled.h1`
    color: ${colors.brandColor};
`;

export const JobsContainer = styled.div`
    padding-top: 16px;
    border-top: 1px solid ${colors.brandColor};
`;

export const ListContainer = styled.div`
    width: 70vw;
    height: 100vh;
    border-right: 1px solid ${colors.brandColor};
`;

export const JobsList = styled.ul`
    padding-right: 12px;
    list-style: none;
    padding-left: 0;
    margin: 0;
`;

export const StyledButton = styled.button`
    padding: 0;
    margin-bottom: 8px;
    background: none;
    border: none;
    border-bottom: 1px solid ${colors.appBarBrd};
    cursor: pointer;
`;

export const CustomButton = styled(Button)`
    border: none;
    padding: 5px 10px;
    background: ${colors.brandColor};
    border-color: ${colors.brandColor};
    cursor: pointer;
    color: ${colors.textWhite};

    &.ant-btn:active {
        color: ${colors.brandColor};
        border-color: ${colors.brandColor};
        background: ${colors.textWhite};
    }

    &.ant-btn:focus,
    &.ant-btn:hover {
        color: ${colors.brandColor};
        border-color: ${colors.brandColor};
        background: ${colors.textWhite};
    }
`;

export const JobCard = styled.li`
    padding: 8px;
    background-color: ${colors.appBarBgr};
    border-bottom: 1px solid ${colors.textWhite};
    color: ${colors.textWhite};
`;

export const DateContainer = styled.div`
    text-align: right;
    font-size: 10px;
`;

export const JobTitle = styled.span`
    font-size: ${fonts.jobCardTitleSize};
    font-weight: ${fonts.jobListFontWeight};
    color: ${colors.brandColor};
`;

export const Salary = styled.span`
    margin-left: 8px;
    color: ${colors.textWhite};
    font-weight: ${fonts.jobListFontWeight};
`;

export const Descriptions = styled.p`
    margin-bottom: 0;
    color: ${colors.textWhiteGrey};
`;

export const OwnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    max-height: 78px;
    margin: 0 0 4px 12px;
`;

export const ValueBox = styled.div`
    padding: 2px;
`;

export const Field = styled.span`
    color: ${colors.textWhiteGrey};
    font-size: 12px;
`;

export const FieldValue = styled.span`
    color: ${colors.brandColor};
    font-weight: ${fonts.jobListFontWeight};
    font-size: 12px;
    margin-left: 3px;
`;

export const StyledNav = styled.button`
    padding: 4px 8px;
    border: none;
    cursor: pointer;
    color: ${colors.textWhite};
    background-color: ${colors.brandColor};
    &:disabled {
        color: ${colors.textWhite};
        background: ${colors.passwordBg};
        cursor: no-drop;
        font-style: italic;
    }
`;

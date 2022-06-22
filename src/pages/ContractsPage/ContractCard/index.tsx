/* eslint-disable no-unused-expressions */
import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { Paths } from 'router/paths';
import { IContract } from 'store/apis/contracts/contracts.types';
import { dateFormat, statusOfContract } from 'constants/index';
import { useChangeContractStatusMutation } from 'store/apis/contracts';
import SpinnerWrapper from 'components/Spinner/SpinnerWrapper';
import { AppContext } from 'context';
import { message } from 'antd';
import { useGetChatContactsByJobIdQuery } from 'store/apis/chat';
import {
    StyledTitleCardButton,
    CardTitle,
    Salary,
    ButtonContainer,
    Descriptions,
    ValueBox,
    Field,
    FieldValue,
    StyledCardBtn,
    OneCard,
    StatusValue,
    ConfirmContainer,
    Confirm,
    StyledConfirmBtn,
} from '../styles';

interface IProps {
    contractObj: IContract;
}

const ContractCard: React.FC<IProps> = ({ contractObj }) => {
    const [confirmStatus, setConfirmStatus] = useState<boolean>(false);

    const { t } = useTranslation();
    const { socket, setCurrentChat } = useContext(AppContext);

    const navigate = useNavigate();

    const [changeContractStatus, { isLoading }] =
        useChangeContractStatusMutation();

    const { id, createdAt, offerId, closedAt, status } = contractObj;

    const onClickJob = (): void => {
        navigate(Paths.JOB_PAGE, { state: { id: offerId.jobId.id } });
    };

    const job = offerId?.jobId;
    const freelancer = offerId?.freelancerId;

    const { data: chatContacts } = useGetChatContactsByJobIdQuery({
        jobId: job?.id,
        freelancerId: freelancer?.id,
    });

    const sentTerminatedMessage = (): void => {
        try {
            const newMessage = {
                content: `<div className='Declined'>
                <h3 className='terminated'>${t('Chat.terminatedTitle')}</h3>
                <p className='title'>${t('Chat.title')}<span>${
                    job?.title
                }<span></p>
                <p className='title'>${t('Chat.dsc')}<span>${
                    job?.description
                }<span></p>
                <p>${t('Chat.contractTerminated')}<span className="Date">
                ${moment(new Date(Date.now())).format(dateFormat)}<span></p>
                </div>`,
                senderId: freelancer?.id,
                roomId: chatContacts?.id,
                isOffer: true,
            };

            socket.emit('msgToServer', newMessage);
        } catch (error) {
            message.error(error?.message);
        }
    };

    const onChangeStatus = async (): Promise<void> => {
        const endDate = Date();
        await changeContractStatus({
            id,
            status: 'closed',
            closedAt: endDate,
        });
        setConfirmStatus(!confirmStatus);
        sentTerminatedMessage();
    };

    const handleNavigate = (): void => {
        navigate(Paths.CHAT);
        setCurrentChat?.(chatContacts);
    };

    return (
        <OneCard>
            <SpinnerWrapper isLoading={isLoading}>
                <StyledTitleCardButton onClick={onClickJob} type="submit">
                    <CardTitle>{offerId.jobId.title}</CardTitle>
                    <Salary>{offerId?.hourRate}$</Salary>
                </StyledTitleCardButton>

                <ValueBox>
                    <Field>{t('ContractsPage.jobOwner')}</Field>
                    <FieldValue>
                        {offerId.ownerId.firstName} {offerId.ownerId.lastName}
                    </FieldValue>
                </ValueBox>

                <ValueBox>
                    <Field>{t('ContractsPage.freelancer')}</Field>
                    <FieldValue>
                        {offerId.freelancerId.firstName}{' '}
                        {offerId.freelancerId.lastName}
                    </FieldValue>
                </ValueBox>

                <ValueBox>
                    <Descriptions>{offerId.jobId.description}</Descriptions>
                </ValueBox>

                <ValueBox>
                    <Field>{t('ContractsPage.startDate')}</Field>
                    <FieldValue>
                        {moment(new Date(createdAt)).format(dateFormat)}
                    </FieldValue>
                </ValueBox>
                {status === statusOfContract.CLOSED && (
                    <StatusValue>
                        {t('ContractsPage.contractIsEnded')}{' '}
                        {closedAt &&
                            moment(new Date(closedAt)).format(dateFormat)}
                    </StatusValue>
                )}

                <ButtonContainer>
                    <StyledCardBtn onClick={handleNavigate}>
                        {t('OffersPage.goToChat')}
                    </StyledCardBtn>
                    {status === statusOfContract.OPENED && (
                        <StyledCardBtn
                            onClick={() => setConfirmStatus(!confirmStatus)}
                        >
                            {t('ContractsPage.endContract')}
                        </StyledCardBtn>
                    )}
                </ButtonContainer>
                <ConfirmContainer confStatus={confirmStatus}>
                    <Confirm>
                        <p>{t('ContractsPage.areYouSure')}</p>
                        <p>{t('ContractsPage.doYouWant')}</p>
                        <div>
                            <StyledConfirmBtn
                                type="primary"
                                onClick={() => setConfirmStatus(!confirmStatus)}
                            >
                                No
                            </StyledConfirmBtn>
                            <StyledConfirmBtn
                                type="primary"
                                onClick={() => onChangeStatus()}
                            >
                                Yes
                            </StyledConfirmBtn>
                        </div>
                    </Confirm>
                </ConfirmContainer>
            </SpinnerWrapper>
        </OneCard>
    );
};

export default ContractCard;

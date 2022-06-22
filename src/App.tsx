import React, { useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicPage from 'pages/PublicPage/PublicPage';
import JobsPage from 'pages/JobsPage';
import MainLayout from 'components/MainLayout';
import ForgotPassword from 'pages/ForgotPassword';
import { Paths } from 'router/paths';
import ResetPassword from 'pages/ResetPassword';
import { userRole } from 'constants/index';
import SendProposal from 'pages/SendProposal';
import ContactInfo from 'pages/ContactInfo';
import HomePage from 'pages/HomePage';
import AuthForm from 'components/AuthForm';
import RolePage from 'pages/RolePage';
import OneJobPage from 'pages/OneJobPage';
import SettingPage from 'pages/SettingPage';
import { Protected, ProtectedRoute } from 'router/Protected';
import OffersPage from 'pages/OffersPage';
import Chat from 'pages/Chat';
import CreateJobPage from 'pages/CreateJobPage';
import ContactsPage from 'pages/ContractsPage';
import OwnerJobsPage from 'pages/OwnerJobsPage';
import TalentsPage from 'pages/TalentsPage';
import { AppContext, appSocket } from 'context';
import MyContacts from 'pages/MyContacts(JobOwner)';
import { useAppSelector } from 'hooks/redux';
import { TChatArgument } from 'pages/Chat/interfaces';

const App: React.FC = () => {
    const [currentChat, setCurrentChat] = useState<undefined | TChatArgument>(
        undefined
    );
    const context = useMemo(
        () => ({ socket: appSocket, currentChat, setCurrentChat }),
        [currentChat]
    );

    const role = useAppSelector((state) => state.auth.user?.role);

    const userId = useAppSelector((state) => state.auth.user?.id);

    const profilePath = `profile/${userId}`;

    return (
        <AppContext.Provider value={context}>
            <MainLayout>
                <Routes>
                    <Route element={<Protected />}>
                        <Route
                            path={Paths.JOBS}
                            element={
                                <ProtectedRoute
                                    boolValue={role !== userRole.freelancer}
                                    redirectPath={Paths.HOME}
                                >
                                    <JobsPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path={Paths.OFFERS}
                            element={
                                <ProtectedRoute
                                    boolValue={role !== userRole.freelancer}
                                    redirectPath={Paths.HOME}
                                >
                                    <OffersPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path={Paths.OFFERS}
                            element={
                                <ProtectedRoute
                                    boolValue={role !== userRole.freelancer}
                                    redirectPath={Paths.HOME}
                                >
                                    <JobsPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path={Paths.MY_CONTRACTS}
                            element={<ContactsPage />}
                        />
                        <Route
                            path={profilePath}
                            element={
                                <ProtectedRoute
                                    boolValue={role !== userRole.freelancer}
                                    redirectPath={Paths.HOME}
                                >
                                    <PublicPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path={Paths.SEND_PROPOSAL}
                            element={
                                <ProtectedRoute
                                    boolValue={role !== userRole.freelancer}
                                    redirectPath={Paths.HOME}
                                >
                                    <SendProposal />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path={Paths.TALENT}
                            element={
                                <ProtectedRoute
                                    boolValue={role !== userRole.owner}
                                    redirectPath={Paths.HOME}
                                >
                                    <TalentsPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path={Paths.OWNER_JOBS}
                            element={
                                <ProtectedRoute
                                    boolValue={role !== userRole.owner}
                                    redirectPath={Paths.HOME}
                                >
                                    <OwnerJobsPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path={Paths.CREATE_JOB_PAGE}
                            element={
                                <ProtectedRoute
                                    boolValue={role !== userRole.owner}
                                    redirectPath={Paths.HOME}
                                >
                                    <CreateJobPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path={Paths.SETTING_ID}
                            element={<SettingPage />}
                        />
                        <Route
                            path={Paths.CONTACT_INFO}
                            element={<ContactInfo />}
                        />
                        <Route path={Paths.JOB_PAGE} element={<OneJobPage />} />
                        <Route
                            path={Paths.SELECT_ROLE}
                            element={<RolePage />}
                        />
                        <Route path={Paths.CHAT} element={<Chat />} />
                        <Route
                            path={Paths.CREATE_JOB_PAGE}
                            element={<CreateJobPage />}
                        />
                        <Route
                            path={Paths.MY_CONTACTS}
                            element={<MyContacts />}
                        />
                    </Route>
                    <Route path={Paths.HOME} element={<HomePage />} />
                    <Route path={Paths.SIGN_UP} element={<AuthForm />} />

                    <Route
                        path={Paths.TALENTS_PROFILE}
                        element={<PublicPage />}
                    />

                    <Route
                        path={Paths.FORGOTTEN_PASSWORD}
                        element={<ForgotPassword />}
                    />
                    <Route
                        path={Paths.RESET_PASSWORD}
                        element={<ResetPassword />}
                    />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </MainLayout>
        </AppContext.Provider>
    );
};

export default App;

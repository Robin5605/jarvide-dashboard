import { GetServerSidePropsContext, NextPage } from "next";

interface DashboardProps {
    id?: string;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    if(typeof context.params !== 'undefined') {
        if(typeof context.params.id === 'string') {
            return { props: { id: context.params.id } }
        } else {
            return { props: { } };
        }
    } else {
        return { props: { } };
    }
}

const Dashboard = ({ id }: DashboardProps) => {
    return (
        <div className="flex items-center justify-center bg-dark-900 min-h-screen">

        </div>
    );
}

export default Dashboard;
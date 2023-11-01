import { Grid, Skeleton } from '@mui/material';
import Loader from '../../assets/Loader/loader.gif';
import { v4 as uuidv4 } from 'uuid';
import './preloader.scss';
import Image from 'next/image';

export const PreLoader = (props: any) => {
    return (
        <div className={props.isEnquiryModal ? "enquiryModalHeight" : "loader-wrapper"}>
            <Image src={Loader} alt='component-loader' />
        </div>
    )
}
interface props {
    length?: number;
    feedbackLength?: number;
}
export const ApiLoader = (props: props) => {
    const { length, feedbackLength } = props;
    let skeletonLoader = [];
    let i;
    for (i = 0; length ? (i < length) : feedbackLength ? (i < feedbackLength) : (i < 10); i++) {
        skeletonLoader[i] = [
            { xs: 0.5 },
            { xs: 2 },
            { xs: 2 },
            { xs: 2 },
            { xs: 2 },
            { xs: 2 },
            { xs: 1.5 }
        ]
    }
    return (
        <Grid container my={2} px={2}>
            <Grid item container xs={12} columnSpacing={3} rowSpacing={3} flexDirection='row'>
                {skeletonLoader.map((e) => e?.map((item: any, i: number) =>
                    <Grid item xs={4} key={uuidv4()} md={feedbackLength ? 12 : item.xs} className='skeleton-grid'>
                        <Skeleton animation="wave" />
                    </Grid>
                )
                )}
            </Grid>
        </Grid>
    )
}


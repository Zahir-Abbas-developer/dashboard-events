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

export const CardsApiLoader = (props?: any) => {
    const { image, height, color, feedback } = props;
    return (
        <Grid container py={color ? 5 : 3} px={2} bgcolor={color ? color : '#fff'} className='border-radius-8' minHeight={height ? '200px' : 'auto'} sx={{ boxShadow: '-8px 8px 12px rgb(218 222 232 / 40%)' }}>
            <Grid item container xs={12} flexDirection='row' >
                {image && <Grid item xs={4} md={feedback ? 0.7 : 3}>
                    <Skeleton animation="wave" variant="circular" width={50} height={50} />
                </Grid>}
                <Grid item xs={8} md={feedback ? 11.3 : 9}>
                    <Skeleton animation="wave" sx={{ marginBottom: '4px' }} height='18px' />
                    <Skeleton animation="wave" width='75%' sx={{ marginBottom: (image && !height) ? '20px' : '4px' }} height='18px' />
                    <Skeleton animation="wave" width={image ? '30%' : '50%'} height='18px' sx={{ float: (image && !height) ? 'right' : 'left' }} />
                </Grid>
            </Grid>
        </Grid>
    )
}


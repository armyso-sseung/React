import {Avatar, Box, Button, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import {useMemo} from "react";
import {MdAdd} from "react-icons/md";
import {RiSubtractFill} from "react-icons/ri";


const ReservationPaymentComponent = ({ cartList, handleClickAmount }) => {
    const totalPrice = useMemo(() => {
        let sum = 0
        cartList.forEach(cart => sum += (cart.price * cart.count))
        return sum
    }, [cartList])

    return (
        <Box className={"ReservationPaymentComponent"} padding={2}>
            <Box className={"item-list"} height={800}>
                <List xs={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {cartList.map(cart => (
                        <ListItem key={cart.id}>
                            <ListItemAvatar>
                                <Avatar src={cart.path} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={cart.title}
                                secondary={
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        예매 수 : {cart.count}
                                        <Button onClick={() => handleClickAmount(cart, 1)}>
                                            <MdAdd />
                                        </Button>
                                        <Button onClick={() => handleClickAmount(cart, -1)}>
                                            <RiSubtractFill />
                                        </Button>
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box className={"price-total"} height={200}>
                {totalPrice}
            </Box>
        </Box>
    )
}


export default ReservationPaymentComponent;
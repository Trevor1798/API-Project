import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {useEffect, useState} from 'react'
import { getBookingsByCurrentUser } from "../../store/booking";
import { deleteBookingById } from "../../store/booking";
import { getAllSpots } from "../../store/spots";

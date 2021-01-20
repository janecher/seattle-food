import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer VcaNGMmxyG4K4AXjW9D8DXCIkCImhDfhoUwKmP6zpQDOAawjxguiANosnkeB28zOPqL6vUpgWKe7y7h-5bWTlEUjDmTRBEKXccXjm1HqsQEzwvwv6zyNehmxR2kCYHYx'
    }
});
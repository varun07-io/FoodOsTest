import React from "react";


import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table
} from 'reactstrap';

const OutOrders = () => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 [General]                                                  */
        /*--------------------------------------------------------------------------------*/

        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Out for Delivery Orders</CardTitle>
                    </div>
                    <div className="ml-auto d-flex no-block align-items-center">
                        <div className="dl">
                            <Input type="select" className="custom-select">
                                <option value="0">Monthly</option>
                                <option value="1">Daily</option>
                                <option value="2">Weekly</option>
                                <option value="3">Yearly</option>
                            </Input>
                        </div>
                    </div>
                </div>
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                        <tr className="border-0">
                            <th className="border-0">User</th>
                            <th className="border-0">Items</th>

                            <th className="border-0">Address</th>
                            <th className="border-0">Status</th>
                            <th className="border-0">Delivered Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img  alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Hanna Gover</h5><span>hgover@gmail.com</span></div>
                                </div>
                            </td>
                            <td>Elite Admin</td>

                            <td>
                                <i className="fa fa-circle text-orange" id="tlp1"></i>

                            </td>
                            <td>35</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img  alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Daniel Kristeen</h5><span>Kristeen@gmail.com</span></div>
                                </div>
                            </td>
                            <td>Elite Admin</td>

                            <td>
                                <i className="fa fa-circle text-success" id="tlp2"></i>

                            </td>
                            <td>35</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img  alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Julian Josephs</h5><span>Josephs@gmail.com</span></div>
                                </div>
                            </td>
                            <td>Elite Admin</td>

                            <td>
                                <i className="fa fa-circle text-success" id="tlp3"></i>

                            </td>
                            <td>35</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img  alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Jan Petrovic</h5><span>hgover@gmail.com</span></div>
                                </div>
                            </td>
                            <td>Elite Admin</td>

                            <td>
                                <i className="fa fa-circle text-orange" id="tlp4"></i>

                            </td>
                            <td>35</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card >
    );
}

export default OutOrders;
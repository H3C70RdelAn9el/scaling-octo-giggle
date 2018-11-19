import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

export class Contact extends Component {
  render() {
    return (
      <div classNames="contact-body" >
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Hector del Angel</h2>
            <img src="https://lh3.googleusercontent.com/H26pPjfENvHj4bySILBKnd4J2Pf1ESuZu9LKdUcX73Ndct4aNP3KnUGPIcWpwuIB7IxkezCGaG7B3tsBJ9E8DA4gpnyYI6XsA9Mjers3iEjwg8i1HiraqRt7wlWUlOT8WOfisua7KnfVzzeiitAzFyqKmkAeT8kgNzHG83eDkgtevYkeM04jSMvV7sPxFIv8m6Aa8nVnlchnznyOWSVYXrgHlFHvl0IRZWFpOeMD6TULpAmLnoswUI9I5LIF4CBPKSbCqsJRNxni4MtCoCEN2CAvNa71n6FOqPQzvIZeY7pNrgHT5zjjF-k859PIi0z9uu25Trlp5ypBv6va-Ng3MLqLsd-5fmLeGuDy5cqTxRofrSdo2Q4mMWLZaYJ9F9zSuCiEzKgo5EqURh8tBt0lycK9oxQI2TkJc3wkuNgzTeWgOMUMDQ5YXdat_86VmnjNBE1T1Tz7cJMIudQuPVcOHgpjiDvjuqkJvKb4RLUI8OoqssWFF8GCj5hFBLi1QUCRlTlyI_mlgWY-Nb-cMzZCxDijUTQHyyVv6_PckeyOtJ_QIkkSQca40Hg17sOAED-7QTxkm1dNcr14Lqi7OqjinvSue7mIXT0bmQpOy5Jw9Y2QDfnnnXgJPqSKHpLo4XFivgZkr7BuiIVkJpW8z0cjCeGz=s400-no" alt="avatar" style={{ height: '250px', borderRadius: '25px'}}/>
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deleniti quod magni alias animi nemo ad, perspiciatis cupiditate quia accusamus.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent className="contact-list-item">
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (818)303-5489
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className="contact-list-item">
                    <i className="fa fa-envelope" aria-hidden="true" />
                    hectordelangel@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className="contact-list-item">
                    <i className="fa fa-skype" aria-hidden="true" />
                    SkypeId
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;

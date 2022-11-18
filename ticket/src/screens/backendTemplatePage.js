import Page from '../components/Page';
import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';


// Things we want to use to call our api: 
// city
// criteria
// what are the criteria? 
/**
 * City = city ID (Let's start with checkboxes for now)
 *  "price_low",
    "price_high",
    "age_low",
    "age_high",
    "activity_type",
    "time_spent",
    "date",
    "time_of_day"
 */



function BackendTemplatePage () {
  const [filterQuery, setFilterQuery] = useState(null);
  const [useFilter, setUseFilter] = useState('');

  const [id, setCid] = useState('');
  const [activityType, setActivityType] = useState('');
  // build out other filters (listed above) in a similar 
  // format to activityType

  const [idToggle, setIdToggle] = useState('');
  const [activityToggle, setActivityToggle] = useState('');
  // set other toggles (one for each filter) in a similar 
  // format to activityType

  const [submitted, setSubmitted] = useState(false);
  
  const [posts, setPosts] = useState([]);
	const [numPosts, setNumPosts] = useState(0);
	const [loaded, setLoaded] = useState(false);

  useEffect(() => {
		var query_string = '';
		var multiple = false;
		var add_q = false;
		var filter_dict = {
			activity_type : activityType
		};
		for (let filter in filter_dict) {
			if (filter_dict[filter] !== '') {
				add_q = true;
				if (multiple) {
					query_string += '&';
				}
				var dict_val = filter_dict[filter];
				query_string += filter + '=' + dict_val;
				multiple = true;
			}
		}
		if (add_q) {
			query_string = '?' + query_string;
			setUseFilter(true);
		}
		setFilterQuery(query_string);
	}, [id, activityType]);
  
  
  useEffect(() => {
    setSubmitted(false);
    setCid(idToggle);
    setActivityType(activityToggle);
	}, [submitted]);


  useEffect(() => {
		const fetchPosts = async () => {
			setLoaded(false);
			var requestOptions = {
				method: 'GET',
				redirect: 'follow',
			};

			fetch(
				'http://localhost:5000/attractions/bycity/' +
        id + 
				filterQuery,
				requestOptions
			)
				.then((response) => response.json())
				.then((result) => {
					console.log(
						'fetched: ' +
							'http://localhost:5000/attractions/bycity/' + id + 
							filterQuery
					);
					var postArr = [];
					for (const [key, value] of Object.entries(result)) {
						if (key !== 'num_entries') {
							postArr.push(value);
						} else {
							setNumPosts(value);
						}
					}
					setPosts(postArr);
					setLoaded(true);
				})
				.catch((error) => console.log('error', error));
		};
		if (filterQuery !== null) {
			fetchPosts();
		}
	}, [id, filterQuery, useFilter]);

  // hardcoded for now
  const city_options = [
    {
      value: -1,
      label: "Select a location",
    },
    {
      value: 0,
      label: "Austin, Texas, USA",
    },
    {
      value: 1,
      label: "Shanghai, China",
    },
    {
      value: 2,
      label: "Agra, UP, India",
    },
  ]; // TODO: build a entrypoint in your backend to get this data dynamically
  return (
    <Page title="Forms" breadcrumbs={[{ name: 'Forms', active: true }]}>
      <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Input Types</CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Plain Text (Static)</Label>
                  <Input
                    plaintext
                    value="Lets use these filters for now: Austin Texas, Outdoor Activities"
                    readOnly
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleDate">Date</Label>
                  <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                    placeholder="date placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleTime">Time</Label>
                  <Input
                    type="time"
                    name="time"
                    id="exampleTime"
                    placeholder="time placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Select</Label>
                  <Input 
                    type="select" 
                    name="select"
                    onChange={(e) => {
                      setIdToggle(e.target.value);
                      console.log(e.target.value);
                    }}
                    >
                    {city_options.map((option) => (
                          <option value={option.value}>{option.label}</option>
                    ))}
                  </Input>
                </FormGroup>
                <FormGroup tag="fieldset" row>
                  <Label for="checkbox2" sm={2}>
                    Activity Type
                  </Label>
                  <Col sm={10}>
                    <FormGroup check>
                      <Label check>
                        <Input 
                          type="radio" 
                          name="radio2" 
                          value='Indoor'
                          onChange={(e) => {
                            setActivityToggle(e.target.value);
                            console.log(e.target.value);
                          }}/>Indoor
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                      <Input 
                          type="radio" 
                          name="radio2" 
                          value='Outdoor'
                          onChange={(e) => {
                            setActivityToggle(e.target.value);
                            console.log(e.target.value);
                          }}/>Outdoor
                      </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                      <Label check>
                        <Input type="radio" name="radio2" disabled /> Both Indoor and Outdoor
                      </Label>
                    </FormGroup>
                    
                  </Col>
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button
                      onClick={(e) => {
                      setSubmitted(true);
                      }}
                    >Submit</Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>

        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Form Grid</CardHeader>
            <CardBody>
              <Form>
              <FormGroup>
                  <Label for="exampleEmail">Plain Text (Static)</Label>
                  <Input
                    plaintext
                    value={posts}
                    readOnly
                  />
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default BackendTemplatePage;
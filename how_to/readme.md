Row, Col e Panel

<Row classes={'m-b-xl'}>
      <Col size="8" offset="2">
        <Panel title="Account"></Panel>
      </Col>
</Row>
  
Buttons

  <Button label="pay now" size="btn-sm" color="btn-success" />
  
  
Input 

  <Input icon="fa fa-user" placeholder="email" />
  
Dropdown
  
   <DropDownButton onItemSelect={ (s) => alert('dsadsa') } items={[
                {id:0, name:'item 1'},
                {id:1, name:'item 2'},
                {id:2, name:'item 3'},
                ]} selectedLabel="pick something..." />
                
Badge
   <Badge classes={'d-i-b pull-left m-r-lg'} color="blue" title="Facebook" icon="fa-facebook"/>
   
   
   
Fa

<Fa icon="rocket" size={48} />

I
<I icon="g_translate" size={48}/>

Pager
 <Pager currentPage={0} itemsPerPage={10} totalItems={22} />
 
 Switch
  <Switch on={true} classes={'m-r-lg'} />
             <Switch on={false} />

SearchBox

<SearchBox />


table

 <table className="table"> 
                        <thead> 
                          <tr> 
                            <th>Device</th> 
                            <th>Consumed</th> 
                            <th>Potential</th> 
                            <th>Distribution</th> 
                          </tr> 
                        </thead> 
                        <tbody> 
                          <tr> 
                            <td>Heating - House</td> 
                            <td>45 kW</td> 
                            <td>30 kW</td> 
                            <td> 
                              <ProgressBar style={{backgroundColor:'#f77373'}} now={40} max={100} theme="progress-bar-default" />
                            </td> 
                          </tr> 
                          <tr> 
                            <td>Heating - House</td> 
                            <td>45 kW</td> 
                            <td>30 kW</td> 
                            <td> 
                              <ProgressBar style={{backgroundColor:'#f77373'}} now={40} max={100} theme="progress-bar-danger" />
                            </td> 
                          </tr> 
                          <tr> 
                            <td>Heating - House</td> 
                            <td>45 kW</td> 
                            <td>30 kW</td> 
                            <td> 
                              <ProgressBar style={{backgroundColor:'#f77373'}} now={40} max={100} theme="progress-bar-warning" />
                            </td> 
                          </tr> 
                          <tr> 
                            <td>Heating - House</td> 
                            <td>45 kW</td> 
                            <td>30 kW</td> 
                            <td> 
                              <ProgressBar style={{backgroundColor:'#f77373'}} now={40} max={100} theme="progress-bar-success" />
                            </td> 
                          </tr> 
                          <tr> 
                            <td>Heating - House</td> 
                            <td>45 kW</td> 
                            <td>30 kW</td> 
                            <td> 
                              <ProgressBar style={{backgroundColor:'#f77373'}} now={40} max={100} theme="progress-bar-info" />
                            </td> 
                          </tr> 
                        </tbody> 
                      </table>

import React from "react";
import moment from 'moment' 
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { blue, orange, grey } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import { CalendarTodayOutlined, 
        PeopleAltOutlined, 
        PersonAddOutlined, 
        PersonAddDisabledOutlined, 
        LocalConvenienceStoreOutlined,
        SyncOutlined,
        ReceiptOutlined} from '@material-ui/icons';
        import LocalConvenienceStoreIcon from '@material-ui/icons/LocalConvenienceStore';

    const useStyles = makeStyles((theme) => ({
        root: {
        '& > span': {
            margin: theme.spacing(3),
        },
        },
    }));

const Vida = ({ vidas, vigencias }) => {

    const classes = useStyles();

    const vidasGroup = _.chain(vidas)
    .groupBy('category.name')
    .map((vidas, name) => ({ name, vidas })) 
    .uniq()
    .flatten()
    .value();

    const vigenciasGroup = _.chain(vigencias)
    .groupBy('category.id')
    .map((vigencias, id) => ({ id, vigencias })) 
    .uniq()
    .flatten()
    .value();

  return (
    <Container>
    <div>
      <div>
        <div>
{
    vidasGroup.map((vidas, function(num, index){
        
		var results =  _.map(num.vidas, function(opts){ 
			return {
                    _id:                opts._id,
                    category:           opts.category.name,
                    categoryId:         opts.category._id, 
                    Data:               moment(opts.Data).format("DD/MM/yyyy").toLocaleUpperCase(),
                    MassaTotal:         opts.MassaTotal, 
                    SosUnimed:          opts.SosUnimed, 
                    SosMedilar:         opts.SosMedilar,
                    VendasNovas:        opts.VendasNovas, 
                    VendasCanceladas:   opts.VendasCanceladas,
                    Publicado:          moment(opts.PublishedAt).format("DD/MM/yyyy").toLocaleUpperCase(),
                    vigencia:           opts.category.vigencia
                     };
        }); 
        var arr = _.values(results);
        
            return[ 
                <Container>
                <div value={results}>
                    {_.chain(results).groupBy('category').map((rows, name) => {
                        return [
                            <br key={index}></br>,
                            <Typography key={name} variant="h6" className="singular">
                                <p style={{ color: orange[800] }}>&nbsp;{name}</p>
                            </Typography>]
                        }
                        ).uniq().flatten().value()
                    }
                </div>
                </Container>,
                <Container>
                <div key={index + Math.random()}>
                <TableContainer component={Paper} className="uk-margin-medium-bottom">
                    <Table aria-label="customized table" >
                        {_.chain(results).groupBy('Publicado').map((rows, pub) => {
                            return [
                            <caption key={pub} text-align="right"><SyncOutlined fontSize="small" style={{ color: grey[400] }}/>&nbsp;Atualizado em {pub}</caption>
                            ]}
                        ).last().uniq().flatten().value()
                        }
                        <TableHead>
                        <TableRow>
                            <TableCell align="left" style={{ color: blue[800] }}><CalendarTodayOutlined fontSize="small" style={{ color: blue[900] }}></CalendarTodayOutlined>&nbsp;&nbsp;DATA</TableCell>
                            <TableCell align="center" style={{ color: blue[800] }}><PeopleAltOutlined fontSize="small" style={{ color: blue[900] }}></PeopleAltOutlined>&nbsp;&nbsp;MASSA&nbsp;TOTAL</TableCell>
                            <TableCell align="center" style={{ color: blue[800] }}><LocalConvenienceStoreOutlined  style={{ color: blue[900] }}></LocalConvenienceStoreOutlined>&nbsp;&nbsp;SOS&nbsp;UNIMED</TableCell>
                            <TableCell align="center" style={{ color: blue[800] }}><LocalConvenienceStoreIcon style={{ color: blue[900] }}></LocalConvenienceStoreIcon>&nbsp;&nbsp;SOS&nbsp;MEDILAR</TableCell>
                            <TableCell align="center" style={{ color: blue[800] }}><PersonAddOutlined fontSize="small" style={{ color: blue[900] }}></PersonAddOutlined>&nbsp;&nbsp;VENDAS&nbsp;NOVAS</TableCell>
                            <TableCell align="center" style={{ color: blue[800] }}><PersonAddDisabledOutlined fontSize="small" style={{ color: blue[900] }}></PersonAddDisabledOutlined>&nbsp;&nbsp;VENDAS&nbsp;CANCELADAS</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {arr.map((row, key) => [
                                <TableRow key={key + Math.random()}>
                                    <TableCell component="th" scope="row">{row.Data}</TableCell>
                                    <TableCell align="center">{row.MassaTotal}</TableCell>
                                    <TableCell align="center">{row.SosUnimed}</TableCell>
                                    <TableCell align="center">{row.SosMedilar}</TableCell>
                                    <TableCell align="center">{row.VendasNovas}</TableCell>
                                    <TableCell align="center">{row.VendasCanceladas}</TableCell>
                                </TableRow>,
                                console.log(row) 
                                ])}    
                                <TableRow >
                                    <TableCell scope="row">
                                        <ReceiptOutlined fontSize="small" style={{ color: grey[500] }} />
                                    </TableCell>
                                </TableRow>                     
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            </Container>
            ];

          })
        )
        }
        </div>
      </div>
    </div>
    </Container>
  );
};

export default Vida;
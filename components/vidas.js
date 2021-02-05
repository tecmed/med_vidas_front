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
import Box from '@material-ui/core/Box';
import { CalendarTodayOutlined, 
        PeopleAltOutlined, 
        FavoriteBorderOutlined, 
        FavoriteOutlined, 
        PersonAddOutlined, 
        PersonAddDisabledOutlined, 
        LocalConvenienceStoreOutlined,
        SyncOutlined} from '@material-ui/icons';

    const useStyles = makeStyles((theme) => ({
        root: {
        '& > span': {
            margin: theme.spacing(3),
        },
        },
    }));

const Vida = ({ vidas, submenus }) => {

    const { children, value, index, ...other } = submenus;

    const classes = useStyles();

    const vidasGroup = _.chain(vidas)
    .groupBy('category.name')
    .map((vidas, name) => ({ name, vidas })) 
    .uniq()
    .flatten()
    .value();

  return (
    <div>
      <div>
        <div>

{
    vidasGroup.map((vidas, function(num, index){

		var results =  _.map(num.vidas, function(opts){ 
			return {
                    _id:        opts._id,
                    category:   opts.category.name,
                    Data:       moment(opts.Data).format("DD/MM/yyyy").toLocaleUpperCase(),
                    MassaTotal: opts.MassaTotal, 
                    SosUnimed:  opts.SosUnimed, 
                    SosMedilar: opts.SosMedilar,
                    VendasNovas:opts.VendasNovas, 
                    Publicado:  moment(opts.PublishedAt).format("DD/MM/yyyy").toLocaleUpperCase(),
                     };
        }); 
        var arr = _.values(results);

            return[ 
                <div value={results}>
                    {_.chain(results).groupBy('category').map((rows, name) => {
                        return [
                            <br key={index}></br>,
                            <Typography key={name} variant="h6" className="singular">
                                <p style={{ color: orange[700] }}><LocalConvenienceStoreOutlined fontSize="medium" style={{ color: orange[400] }}/>&nbsp;{name}</p>
                            </Typography>]
                        }
                        ).uniq().flatten().value()
                    }
                </div>,
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
                            <TableCell align="left" style={{ color: blue[900] }}><CalendarTodayOutlined fontSize="small" style={{ color: blue[900] }}></CalendarTodayOutlined>&nbsp;&nbsp;DATA</TableCell>
                            <TableCell align="left" style={{ color: blue[800] }}><PeopleAltOutlined fontSize="small" style={{ color: blue[900] }}></PeopleAltOutlined>&nbsp;&nbsp;MASSA&nbsp;TOTAL</TableCell>
                            <TableCell align="left" style={{ color: blue[800] }}><FavoriteBorderOutlined fontSize="small" style={{ color: blue[900] }}></FavoriteBorderOutlined>&nbsp;&nbsp;SOS&nbsp;UNIMED</TableCell>
                            <TableCell align="left" style={{ color: blue[800] }}><FavoriteOutlined fontSize="small" style={{ color: blue[900] }}></FavoriteOutlined>&nbsp;&nbsp;SOS&nbsp;MEDILAR</TableCell>
                            <TableCell align="left" style={{ color: blue[800] }}><PersonAddOutlined fontSize="small" style={{ color: blue[900] }}></PersonAddOutlined>&nbsp;&nbsp;VENDAS&nbsp;NOVAS</TableCell>
                            <TableCell align="left" style={{ color: blue[800] }}><PersonAddDisabledOutlined fontSize="small" style={{ color: blue[900] }}></PersonAddDisabledOutlined>&nbsp;&nbsp;VENDAS&nbsp;CANCELADAS</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {arr.map((row, key) => (
                            <TableRow key={key + Math.random()}>
                                <TableCell component="th" scope="row">
                                    {row.Data}
                                </TableCell>
                                <TableCell>{row.MassaTotal}</TableCell>
                                <TableCell>{row.SosUnimed}</TableCell>
                                <TableCell>{row.SosMedilar}</TableCell>
                                <TableCell>{row.VendasNovas}</TableCell>
                                <TableCell>{row.VendasNovas}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            ];

          })
        )
        }
        </div>
      </div>
    </div>
  );
};

export default Vida;
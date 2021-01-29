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
import styles from "../assets/jss/tableStyle.js";

const Vida = ({ vidas }) => {

    const useStyles = makeStyles(styles);
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
                <div key={index}>
                {_.chain(results).groupBy('category').map((rows, name) => {
                    return [
                        <br key={index}></br>,
                        <Typography key={name} variant="h6" className="singular">
                            <p>{name}</p>
                        </Typography>]
                    }
                    ).uniq().flatten().value()
                }
                </div>,
                <div key={index + Math.random()}>
                <TableContainer component={Paper}>
                    <Table aria-label="customized table" >
                        {_.chain(results).groupBy('Publicado').map((rows, pub) => {
                            return [
                            <caption key={pub} text-align="right">Atualizado em {pub}</caption>
                            ]}
                        ).last().uniq().flatten().value()
                    }
                        <TableHead>
                        <TableRow>
                            <TableCell>Data</TableCell>
                            <TableCell align="left">Massa&nbsp;Total</TableCell>
                            <TableCell align="left">SOS&nbsp;Unimed</TableCell>
                            <TableCell align="left">SOS&nbsp;Medilar</TableCell>
                            <TableCell align="left">Vendas&nbsp;Novas</TableCell>
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
"use client"; // Hacemos que este archivo sea un Client Component

import React, { useState } from 'react';
import { Divider, Badge, Button, Paper, Box, Typography } from '@mui/material';

export default function Home() {
  const [notificaciones, setNotificaciones] = useState(3);
  const [mensajes, setMensajes] = useState(5);

  const agregarNotificacion = () => setNotificaciones(notificaciones + 1);
  const agregarMensaje = () => setMensajes(mensajes + 1);

  return (
    <Box sx={{ padding: '40px', fontFamily: 'Roboto, sans-serif' }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ color: '#3f51b5' }}>
        Práctica: Divider y Badge
      </Typography>

      {/* Divider con texto */}
      <Divider
        sx={{
          margin: '20px 0',
          borderColor: '#3f51b5',
          borderWidth: '3px',
          fontWeight: 'bold',
        }}
        textAlign="left"
      >
        <Typography variant="h6">Panel de Notificaciones</Typography>
      </Divider>

      <Typography variant="body1" paragraph>
        Administra tus mensajes y alertas usando los botones interactivos:
      </Typography>

      {/* Sección de Mensajes */}
      <Paper sx={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', boxShadow: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Badge badgeContent={mensajes} color="primary">
            <Typography variant="h6" sx={{ fontSize: '20px' }}>
              Mensajes
            </Typography>
          </Badge>
          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: '20px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#303f9f',
              },
            }}
            onClick={agregarMensaje}
          >
            Agregar Mensaje
          </Button>
        </Box>
      </Paper>

      {/* Divider para separar secciones */}
      <Divider sx={{ margin: '20px 0', borderColor: '#3f51b5', borderWidth: '3px' }} />

      {/* Sección de Notificaciones */}
      <Paper sx={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', boxShadow: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Badge badgeContent={notificaciones} color="secondary">
            <Typography variant="h6" sx={{ fontSize: '20px' }}>
              Notificaciones
            </Typography>
          </Badge>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              borderRadius: '20px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#c2185b',
              },
            }}
            onClick={agregarNotificacion}
          >
            Agregar Notificación
          </Button>
        </Box>
      </Paper>

      {/* Divider para separar las secciones finales */}
      <Divider sx={{ margin: '20px 0', borderColor: '#3f51b5', borderWidth: '3px' }} />

      <Typography variant="h4" gutterBottom>
        Resumen
      </Typography>
      <Typography variant="body1" paragraph>
        Total de mensajes: <strong>{mensajes}</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        Total de notificaciones: <strong>{notificaciones}</strong>
      </Typography>
    </Box>
  );
}
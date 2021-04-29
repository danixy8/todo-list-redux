import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crea TODO',
  props<{texto: string}>()
);

export const toggle = createAction(
  '[TODO] Togle TODO',
  props<{id: string}>()
);

export const editar = createAction(
  '[TODO] Editar TODO',
  props<{id: string, texto: string}>()
);

export const eliminar = createAction(
  '[TODO] Eliminar TODO',
  props<{id: string}>()
);

export const toggleAll = createAction(
  '[TODO] ToggleAll ToggleAll',
  props<{toggle: boolean}>()
);

export const eliminarCompletados = createAction(
  '[TODO] EliminarCompletados TODO'
);

import request from 'supertest'
import { App } from '../../app'

const app = new App().getExpressApp()

describe('Notes API', () => {
  let patientId: string
  let noteId: string

  beforeEach(async () => {
    // create a patient (all fields required)
    const res = await request(app)
      .post('/api/patients')
      .send({
        name: 'Diana Martins',
        age: 28,
        weight: 65.5,
        gender: 'FEMALE',
      })
      .expect(201)

    patientId = res.body.data.id
  })

  it('should create a note', async () => {
    const res = await request(app)
      .post(`/api/notes/patients/${patientId}/notes`)
      .send({
        name: 'Paracetamol',
        dosage: 500,
        frequency: 3,
        duration: '5 days',
        instructions: 'After meals',
      })
      .expect(201)

    expect(res.body.success).toBe(true)
    expect(res.body.data.idnotes).toBeDefined()
    noteId = res.body.data.idnotes
  })

  it('should get all notes for a patient', async () => {
    await request(app).post(`/api/notes/patients/${patientId}/notes`).send({
      name: 'Ibuprofen',
      dosage: 200,
      frequency: 2,
      duration: '3 days',
      instructions: 'With water',
    })

    const res = await request(app)
      .get(`/api/notes/patients/${patientId}/notes`)
      .expect(200)

    expect(res.body.success).toBe(true)
    expect(Array.isArray(res.body.data)).toBe(true)
    expect(res.body.data.length).toBeGreaterThan(0)
  })

  it('should get a note by id', async () => {
    const res = await request(app).get(`/api/notes/${noteId}`).expect(200)

    expect(res.body.success).toBe(true)
    expect(res.body.data.idnotes).toBe(noteId)
  })

  it('should update a note', async () => {
    const res = await request(app)
      .put(`/api/notes/${noteId}`)
      .send({
        name: 'Paracetamol Updated',
        dosage: 650,
        frequency: 4,
        duration: '7 days',
        instructions: 'After breakfast and dinner',
      })
      .expect(200)

    expect(res.body.success).toBe(true)
    expect(res.body.data.frequency).toBe(4)
    expect(res.body.data.instructions).toBe('After breakfast and dinner')
  })

  it('should delete a note', async () => {
    const res = await request(app).delete(`/api/notes/${noteId}`).expect(200)

    expect(res.body.success).toBe(true)
  })
})

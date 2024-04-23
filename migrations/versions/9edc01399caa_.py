"""empty message

Revision ID: 9edc01399caa
Revises: 35308343d374
Create Date: 2024-04-23 13:48:54.921892

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9edc01399caa'
down_revision = '35308343d374'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('password_hash', sa.String(length=120), nullable=True))
        batch_op.drop_column('password')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('password', sa.VARCHAR(length=120), autoincrement=False, nullable=False))
        batch_op.drop_column('password_hash')

    # ### end Alembic commands ###
